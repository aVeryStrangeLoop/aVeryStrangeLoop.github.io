var popLayer;


var cscale = chroma.scale('Viridis');

// Canvas paramters
let width=800;
let height=640;

// World parameters
let worldwidth = width-200;
let worldheight = height-40;
let worldxmin = 20;
let worldymin = 20;
let worldxmax = worldxmin+worldwidth;
let worldymax = worldymin+worldheight;

// popsize
var popsize = 2;

// mutprob
var mutprob = -3;


// switching probability
var switchprob = -5;
var switchprobmin = -5;
var switchprobmax = 0.01;
var switchprobstep = 1;

// Genotype space properties
var gridsize_x = 20;
var gridsize_y = 20;
var cell_width = worldwidth/gridsize_x;
var cell_height = worldheight/gridsize_y;

// Speed
var speed = 0;
var speedmin = 0;
var speedmax = 7;

var x_cur;
var y_cur;

var diffit = [];  // List of genotypes with a different fitness than the rest
var rects = [];

var time_avg_flag = false;
var avg_pop = [];

var env = false; // Switches between 0 and 1
var envswitching = true; // Should environment switching be ON?


function add_genotypes(popi,gtype,n=1) {
  var gx = gtype[0];
  var gy = gtype[1];
  var gid = gy*gridsize_x+gx;

  if(popi[0]=='undefined'){
    popi[0]=[gid];
    popi[1]=[n];
  }  else if(popi[0].includes(gid)){
    popi[1][popi[0].indexOf(gid)] += n;
  } else {
    popi[0].push(gid);
    popi[1].push(n);
  }
}

function get_type(x,y){
  var gid = y*gridsize_x+x;
  if(diffit.includes(gid)){
    return 1;
  } else {
    return 0;
  }
}

function evostep(cur_x,cur_y){

  var Ncoords = [cur_x,cur_y<gridsize_y-1 ? cur_y + 1 : 0];
  var Ecoords = [cur_x<gridsize_x-1 ? cur_x + 1 : 0,cur_y];
  var Scoords = [cur_x,cur_y>0?cur_y-1:gridsize_y-1];
  var Wcoords = [cur_x>0?cur_x-1:gridsize_x-1,cur_y];
  var selfcoords = [cur_x,cur_y];

  var Ntype = get_type(Ncoords[0],Ncoords[1]);
  var Etype = get_type(Ecoords[0],Ecoords[1]);
  var Stype = get_type(Scoords[0],Scoords[1]);
  var Wtype = get_type(Wcoords[0],Wcoords[1]);

  var mut = Math.pow(10,mutprob);
  var pop = Math.pow(10,popsize);

  // // Get probability of switching to four neighbors
  var self_type = get_type(cur_x,cur_y);

  if(self_type==0 && !env){
    var prob_N = Ntype==0 ? mut/4 : (pop*mut)/4 ;
    var prob_E = Etype==0 ? mut/4 : (pop*mut)/4 ;
    var prob_S = Stype==0 ? mut/4 : (pop*mut)/4 ;
    var prob_W = Wtype==0 ? mut/4 : (pop*mut)/4 ;
  } else if(self_type==0 && env){
    var prob_N = Ntype==0 ? mut/4 : 0;
    var prob_E = Etype==0 ? mut/4 : 0;
    var prob_S = Stype==0 ? mut/4 : 0;
    var prob_W = Wtype==0 ? mut/4 : 0;
  } else if(self_type==1 && !env){
    var prob_N = Ntype==1 ? mut/4 : 0;
    var prob_E = Etype==1 ? mut/4 : 0;
    var prob_S = Stype==1 ? mut/4 : 0;
    var prob_W = Wtype==1 ? mut/4 : 0;
  } else if(self_type==1 && env){
    var prob_N = Ntype==1 ? mut/4 : (pop*mut)/4 ;
    var prob_E = Etype==1 ? mut/4 : (pop*mut)/4 ;
    var prob_S = Stype==1 ? mut/4 : (pop*mut)/4 ;
    var prob_W = Wtype==1 ? mut/4 : (pop*mut)/4 ;
  }

  var self_prob = 1-prob_N-prob_E-prob_S-prob_W;

  var selection = math.pickRandom([1,2,3,4,5],[prob_N,prob_E,prob_S,prob_W,self_prob]);

  if(selection==1){
    return Ncoords;
  } else if(selection==2){
    return Ecoords;
  } else if(selection==3){
    return Scoords;
  } else if(selection==4){
    return Wcoords;
  } else if(selection==5){
    return selfcoords;
  }
}

function setup(){

  // Create the basic structure
  createCanvas(width,height); // Create canvas
  background(255);
  popLayer = createGraphics(width,height);
  nnLayer = createGraphics(width,height);

  gui= createGui('Options');
  gui.addGlobals('selcof','switchprob','speed');
  gui.setPosition(worldxmax+20,worldymin);

  button1 = createButton('Reset Neutral Network');
  button1.position(worldxmax+20,worldymax);
  button1.mousePressed(clearNN);

  button2 = createButton('Start Time Averaging');
  button2.position(worldxmax+20,worldymax-40);
  button2.mousePressed(startTimeAverage);

  button3 = createButton('Turn off Environment switching');
  button3.position(worldxmax+20,worldymax-160);
  button3.mousePressed(envSwitchOff);

  x_cur = int(random(0,gridsize_x));
  y_cur = int(random(0,gridsize_y));

}


function draw(){
  popLayer.background(255,255);
  // Draw the current population
  if(!time_avg_flag){
      popLayer.fill(0);
      popLayer.noStroke();
      popLayer.rect(worldxmin+x_cur*cell_width,worldymin+y_cur*cell_height,cell_width,cell_height);
  } else{
  var maxpop = Math.max.apply(null,avg_pop[1]);
  var minpop = Math.min.apply(null,avg_pop[1]);
  for(idx=0;idx<avg_pop[0].length;idx++){
    var gtype = avg_pop[0][idx];
    var gx = gtype%gridsize_x;
    var gy = Math.floor(gtype/gridsize_x); 
    var norgs = avg_pop[1][idx];
    popLayer.fill(cscale((norgs-minpop)/(maxpop-minpop)).rgb());
    popLayer.noStroke();
    popLayer.rect(worldxmin+gx*cell_width,worldymin+gy*cell_height,cell_width,cell_height);
  }
}


  image(popLayer,0,0);
  

  // Draw the neutral network
  var union;
  if(rects.length!=0){
    union = rects[0];
    for(let i=1;i<rects.length;i++){
      rect = rects[i];
      union = g.compound(rect,union,'union');
    }
    union.fill=null;
    union.stroke='red';
    union.strokeWidth=2;
    union.draw(drawingContext);
  }

  // Draw a circle for the environment
  fill(env ? 255 : 0);
  noStroke();
  circle(worldxmax+60,worldymax-100,50);


  // Update population
  for(let i=0;i<Math.pow(10,speed);i++){
    [x_cur,y_cur] = evostep(x_cur,y_cur);
    // Switch environment with switchprob;
    if(envswitching){
      if(Math.pow(10,switchprob)>=Math.random()){
        env = !env;
      } 
    } else {
      env = false;
    }

    if(time_avg_flag){
      avg_pop = get_avg_pop(avg_pop,[x_cur,y_cur]);
    }
  }

}

function mouseDragged(){
  if(mouseX<worldxmax && mouseX>worldxmin && mouseY<worldymax && mouseY>worldymin){
    var gx = Math.floor((mouseX-worldxmin)/cell_width);
    var gy = Math.floor((mouseY-worldymin)/cell_width);
    var gid = gy*gridsize_x+gx;
    if(!diffit.includes(gid)){ 
      var rect = g.rect(worldxmin+(gx+1)*cell_width-(cell_width/2),worldymin+(gy+1)*cell_height-(cell_height/2),cell_width,cell_height);
      rects.push(rect);
      diffit.push(gid);
    }
  }
}

function clearNN(){
  rects = [];
  diffit = [];
}

function startTimeAverage(){
  if(time_avg_flag){
    time_avg_flag = false;
    button2.html("Start Time Averaging");
  } else {
    time_avg_flag = true;
    button2.html("Stop Time Averaging");
    var cur_pop = [[y_cur*gridsize_x+x_cur],[1]]; 
    avg_pop = [...cur_pop];
    popLayer.clear();
  }
}

function envSwitchOff(){
  if(envswitching){
    envswitching = false;
    button3.html("Turn on Environment switching");
  } else {
    envswitching = true;
    button3.html("Turn off Environment switching");
  }
}

function get_avg_pop(avg_pop,gtype){
  gx = gtype[0];
  gy = gtype[1];
  add_genotypes(avg_pop,[gx,gy]);
  return avg_pop;
}


