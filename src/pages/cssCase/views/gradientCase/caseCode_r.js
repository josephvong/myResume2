const codeObj={ 
  'case_a':{ 
    'html':
    ` 
    <div class="radial-gradient" style="width:100px; height:100px; background:radial-gradient( yellow,red)" > </div>
    <div class="radial-gradient" style="width:200px; height:100px;  background:radial-gradient(yellow,red)" > </div>
    <div class="radial-gradient" style="width:200px; height:100px;  background:radial-gradient(white,yellow,red)" > </div>
    `,
    'css':
    `
    
    ` 
  },
  'case_b':{ 
    'html':
    ` 
    <div class="radial-gradient" style="width:100px; height:100px; background:radial-gradient(circle 30px,yellow,red)" > </div>
    <div class="radial-gradient" style="width:100px; height:100px; background:radial-gradient(30px 60px,yellow,red)" > </div>
    <div class="radial-gradient" style="width:100px; height:100px; background:radial-gradient(30px 60px at left top,yellow,red)" > </div>
    <div class="radial-gradient" style="width:100px; height:100px; background:radial-gradient(30px 30px at 70px 40px,yellow,red)" > </div>
    `,
    'css':
    `
    
    ` 
  },
  'case_c':{ 
    'html':
    ` 
    <div class="radial-gradient" style="width:150px; height:150px; background:radial-gradient(closest-corner at 50px 50px ,yellow,red)"> </div>
    <div class="radial-gradient" style="width:150px; height:150px; background:radial-gradient(closest-side at 50px 50px ,yellow,red)"> </div>
    <div class="radial-gradient" style="width:150px; height:150px; background:radial-gradient(farthest-side at 50px 50px ,yellow,red)"> </div>
    <div class="radial-gradient" style="width:150px; height:150px; background:radial-gradient(farthest-corner at 50px 50px ,yellow,red)"> </div>
    `,
    'css':
    `
    
    ` 
  },
  'case_d':{ 
    'html':
    ` 
    <div class="radial-gradient" style="width:200px; height:200px;  background:radial-gradient(circle 100px, yellow 20%, red 40%, green 60%, black )"> </div>
    <div class="radial-gradient" style="width:200px; height:200px;  background:radial-gradient(circle 100px, yellow 50px, red 52px )"> </div>
    <div class="radial-gradient" style="width:30px; height:32px; border:1px solid black;  background:radial-gradient(15px 30px at 50% -6px, blue 14px, transparent 16px )"> </div> 
    `,
    'css':
    `
    
    ` 
  },
  'case_e':{ 
    'html':
    ` 
    `,
    'css':
    `
    .case_e .radial-gradient
      position relative
      width 200px
      height 100px
      background red
      &:after
        content ''
        position absolute
        height 10px
        width 100%
        left 0
        //right 0
        bottom -10px
        background radial-gradient(20px 15px at top, red 10px, transparent 11px)
        background-size 20px 10px

    ` 
  },
  'case_f':{ 
    'html':
    ` 
    `,
    'css':
    `
    .case_f .radial-gradient
      width: 200px; 
      height: 200px;
      background: radial-gradient(5px 10px ellipse, transparent 4px, yellow 5px, red 6px, transparent 7px), 
                  radial-gradient(3px circle, red, red 3px, transparent 4px);
      background-size: 25px;

    ` 
  },
  'case_g':{ 
    'html':
    ` 
    `,
    'css':
    `
    .case_g .radial-gradient
      position: relative;
      width: 262px; 
      height: 262px;
      border-radius: 50%; 
      background: linear-gradient(30deg, transparent 40%, rgba(42, 41, 40, .85) 40%) no-repeat 100% 0, 
                  linear-gradient(60deg, rgba(42, 41, 40, .85) 60%, transparent 60%) no-repeat 0 100%, 
                  repeating-radial-gradient(#2a2928, #2a2928 4px, #ada9a0 5px, #2a2928 6px);
      background-size: 50% 100%, 100% 50%, 100% 100%;
      &:after 
        content: '';
        position: absolute;
        top: 50%; left: 50%;
        margin: -35px;
        border: solid 1px #d9a388;
        width: 68px; height: 68px;
        border-radius: 50%;
        box-shadow: 0 0 0 4px #da5b33, inset 0 0 0 27px #da5b33;
        background: #b5ac9a;
    ` 
  },
}

export default codeObj