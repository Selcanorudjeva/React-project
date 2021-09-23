const root= document.getElementById("root");
var template =
<div>
    {/* <h1 style={{"color":"red","margin-left":"100px"}} >Hello react</h1> */}
    <nav style={{"width":"100%", "height" : "60px", "background-color": "#20232a","display":"flex","justify-content":"space-evenly",}}>
        <div className="logo" style={{"display":"flex","flex-direction":"row","color":"#61dafb","font-weight":"700",
    "font-size": "20px", "font-family":"'Georama'"}}>
            <svg style={{"width":"30px","margin-left": "20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
  <title>React Logo</title>
  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
  <g stroke="#61dafb" stroke-width="1" fill="none">
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </g>
</svg>
<p style={{"margin-left": "10px"}}>React</p>
</div>
        <div className="list">
            <ul style={{"display":"flex","flex-direction":"row","color":"white"}}>
                <li style={{"list-style":"none","margin-right":"22px","font-size":"18px","font-family":"Cagliostro","cursor":"pointer" }}>Docs</li>
                <li style={{"list-style":"none","margin-right":"20px","font-size":"18px","font-family":"Cagliostro","cursor":"pointer"}}>Tutorial</li>
                <li style={{"list-style":"none","margin-right":"22px","font-size":"18px","font-family":"Cagliostro","cursor":"pointer"}}>Blog</li>
                <li style={{"list-style":"none","font-size":"18px","font-family":"Cagliostro","cursor":"pointer"}}>Community</li>
            </ul>
        </div>
        <div  className="search" style={{"padding-top":"20px"}}>
        <i class="fas fa-search" style={{"color":"white","font-size":"20px"}}></i>
            <input style={{"background-color": "#20232a","border":"none", "width":"70%","height":"20px",}} type="text" placeholder="Search"/>
        </div>
        <div className="lastside">
        <ul style={{"display":"flex","flex-direction":"row","color":"white"}}>
                <li style={{"list-style":"none","margin-right":"15px","font-size":"18px","font-family":"Cagliostro","cursor":"pointer"}}>v17.0.2</li>
                <li style={{"display":"flex","list-style":"none","margin-right":"15px","font-size":"18px","font-family":"Cagliostro","cursor":"pointer"}}> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg> <p style={{"color":"white","transform":"translate(0px,-18px)"}}>Languages</p></li>
                <li style={{"list-style":"none","margin-right":"15px","font-size":"18px","font-family":"Cagliostro","cursor":"pointer"}}>GitHub</li>
            </ul>
        </div>
    </nav>
        <div className="container" style={{"position":"relative","width": "100%","height":"500px","background-color":"#282c34"}}>
        <svg style={{"opacity":"0.1","width":"50%","position":"absolute","left":"950px","top":"100px"}} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
  <title>React Logo</title>
  <circle cx="0" cy="0" r="2.05" fill="#fff"/>
  <g stroke="#fff" stroke-width="1" fill="none">
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </g>
</svg>
        <h1 style={{"position":"absolute","color": "#61dafb",
"font-size":"60px","font-family":"'Georama'","letter-spacing":"2px","left":"870px","top":"55px"}}>React</h1>
               <h3 style={{"position":"absolute",
"font-size":"30px","font-family":"'Georama'","letter-spacing":"4px","left":"550px","top":"165px","color":"white","font-weight":"100"}}>A JavaScript library for building user interfaces</h3>
    <div style={{"display":"flex","flex-direction":"row","position":"absolute","left":"750px","top":"280px"}} className="but-txt">
    <button style={{"cursor":"pointer","background-color":"#61dafb","border":"none","width":"160px","height":"60px","font-size":"20px","letter-spacing":"1px",}}>Get started</button>
    <h3 style={{"cursor":"pointer","color":"#61dafb","font-weight":"520","font-family":"'Georama'","letter-spacing":"2px","margin-left":"25px","font-size":"22px","margin-top":"17px"}} className="txt">Take the tutorial <svg style={{"width":"9px","transform":"translate(0px,5px)"}} width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z" fill="#61DAFB"/>
</svg>
</h3>
    </div>
        </div>
</div>
ReactDOM.render(template,root);