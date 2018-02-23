const codeObj={ 
  'case_a':{ 
    'html':
    ` 
    <div class="linear-gradient" style="background:linear-gradient(yellow,red)" > </div> 
    <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(to right,yellow 70px,red 71px)" > </div>
    <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(0deg,yellow 70px,red 71px)" > </div>
    <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(-1deg,yellow 70px,red 71px)" > </div>
    <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(1deg,yellow 70px,red 71px)" > </div>
    `,
    'css':
    `
    ` 
  }, 
  'case_b':{ 
    'html':
    `
      <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(yellow 70px,red 71px)" > </div>
      <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(180deg, yellow 70px,red 71px)" > </div>
      <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(0deg, yellow 70px,red 71px)" > </div>
      <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(45deg,yellow 70px,red 71px)" > </div>
      <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(90deg,yellow 70px,red 71px)" > </div>
      <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(-45deg,yellow 70px,red 71px)" > </div> 
    `,
    'css':
    ` 
    ` 
  },
  'case_c':{ 
    'html':
    `
      <div class="linear-gradient" style="background:repeating-linear-gradient(to right,yellow 0, yellow 10px)" > </div>
      <div class="linear-gradient" style="background:repeating-linear-gradient(to right,yellow 0, red 10px)" > </div>
      <div class="linear-gradient" style="background:repeating-linear-gradient(to right,yellow 0, yellow 10px,red 11px, red 20px)" > </div>
    `,
    'css':
    ` 
    ` 
  }, 
  'case_d':{ 
    'html':
    `
    `,
    'css':
    `
    .case_d .linear-gradient
      width 300px
      height 30px
      background:repeating-linear-gradient(90deg, yellow 0px, yellow 5%, red 5.1%, red 10%) repeat;
      animation-name: case_d_bg ;/*动画属性名，也就是我们前面keyframes定义的动画名*/
      animation-duration: 3s;/*动画持续时间*/
      animation-timing-function: linear; /*动画频率，和transition-timing-function是一样的*/ 
      animation-iteration-count: infinite;/*定义循环资料，infinite为无限次*/ 
      background-position: 0px 0 
    @keyframes case_d_bg
      0%
        background-position: 0px 0  
      100%
        background-position: 300px 0  
    ` 
  },
  'case_e':{ 
    'html':
    `
    `,
    'css':
    `
    .case_e .linear-gradient
      width: 400px
      height 50px
      line-height 50px
      text-align center
      font-size 28px 
      background linear-gradient(125deg, black 0, black 5%, white 10%, black 15%)
      //background linear-gradient(red,yellow) 
      color transparent 
      -webkit-background-clip: text;
      animation-name: case_e_bg ; 
      animation-duration: 3s; 
      animation-timing-function: linear;  
      animation-iteration-count: infinite; 
    @keyframes case_e_bg
      0%
        background-position: 0px 0  
      100%
        background-position: 400px 0 
    ` 
  },      
        
}

export default codeObj