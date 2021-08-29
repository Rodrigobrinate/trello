import logo from './logo.svg';
import './App.css';
import react, {useRef} from 'react'

function App() {

  const myRef = useRef(null)
console.log(myRef)

  //const executeScroll = () => myRef.current.scrollIntoView()
 // executeScroll()



  const style = {
    height: '32px',
    width: '32px',
    lineHeight: '32px',
    fontSize: '14px'
  }
  return (
    <div className="App">
     <header>
       <div>
        <button className="app">
          <svg width="24" className="app" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z" fill="currentColor"></path></svg>
        </button>
        <button className="home">
          <svg width="24" className="home" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.58579 10.4142C3.21071 10.7893 3 11.298 3 11.8284V19C3 20.1045 3.89543 21 5 21H10C10.5523 21 11 20.5523 11 20V14H13V20C13 20.5523 13.4477 21 14 21H19C20.1046 21 21 20.1045 21 19V11.8284C21 11.298 20.7893 10.7893 20.4142 10.4142L12.7071 2.70708C12.3166 2.31655 11.6834 2.31655 11.2929 2.70708L3.58579 10.4142ZM13 12C14.1046 12 15 12.8954 15 14V19H19V11.8284L12 4.8284L5 11.8284V19H9V14C9 12.8954 9.89543 12 11 12H13Z" fill="currentColor"></path></svg>
        </button>
        <button className="quadros">
          <svg width="24" className="quadros" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
          <p>Quadros</p>
        </button>
        <input className="ir-para"  placeholder="ir para..." />
        <svg width="24" className="search" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.2269 17.4164 13.8175 16.4356 15.0852L20.3769 19.0953C20.764 19.4892 20.7586 20.1223 20.3647 20.5095C19.9708 20.8966 19.3376 20.8911 18.9505 20.4972L15.0129 16.4909C13.7572 17.4383 12.1942 18 10.5 18ZM16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5Z" fill="currentColor"></path></svg>
      </div>
      <div className="logo">
        <svg width="24" className="quadros" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
        <p>Trello</p>
      </div>
  <br/>
<div style={{marginRigth: '5px'}}>
      <button className="add">
        <svg className="add" width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
      </button> <button className="info">
       <svg className="info" width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path><path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11Z" fill="currentColor"></path><path d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" fill="currentColor"></path></svg>
      </button> <button className="notification">
       <svg className="notification" width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C11.4477 2 11 2.44772 11 3V3.078C10.2728 3.19668 9.65318 3.44603 9.1328 3.79295C8.39456 4.28511 7.91489 4.93416 7.60557 5.55279C7.29822 6.1675 7.14952 6.77011 7.07611 7.2106C7.039 7.43322 7.02007 7.62092 7.01035 7.75688C7.00549 7.82503 7.0029 7.88067 7.00153 7.92176C7.00085 7.94232 7.00046 7.95929 7.00025 7.9724L7.00005 7.98916L7.00001 7.99533L7 7.99786L7 7.99898C7 7.9995 7 8 8 8H7V11.723L4.14251 16.4855C3.95715 16.7944 3.95229 17.1792 4.1298 17.4927C4.30731 17.8062 4.63973 18 5 18H19C19.3603 18 19.6927 17.8062 19.8702 17.4927C20.0477 17.1792 20.0429 16.7944 19.8575 16.4855L17 11.723V8H16C17 8 17 7.9995 17 7.99898L17 7.99786L17 7.99533L17 7.98916L16.9997 7.9724C16.9995 7.95929 16.9992 7.94232 16.9985 7.92176C16.9971 7.88067 16.9945 7.82503 16.9896 7.75688C16.9799 7.62092 16.961 7.43322 16.9239 7.2106C16.8505 6.77011 16.7018 6.1675 16.3944 5.55279C16.0851 4.93416 15.6054 4.28511 14.8672 3.79295C14.3468 3.44603 13.7272 3.19668 13 3.078V3C13 2.44772 12.5523 2 12 2ZM9.00042 7.98839L9 8.00435V12C9 12.1812 8.95074 12.3591 8.85749 12.5145L6.76619 16H17.2338L15.1425 12.5145C15.0493 12.3591 15 12.1812 15 12V8.00436L14.9996 7.98839C14.999 7.97089 14.9977 7.9406 14.9947 7.89937C14.9888 7.81658 14.9765 7.69178 14.9511 7.5394C14.8995 7.22989 14.7982 6.8325 14.6056 6.44721C14.4149 6.06584 14.1446 5.71489 13.7578 5.45705C13.3773 5.20338 12.825 5 12 5C11.175 5 10.6227 5.20338 10.2422 5.45705C9.85544 5.71489 9.58511 6.06584 9.39443 6.44721C9.20178 6.8325 9.10048 7.22989 9.04889 7.5394C9.0235 7.69178 9.01118 7.81658 9.00527 7.89937C9.00233 7.9406 9.001 7.97089 9.00042 7.98839ZM14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19H14Z" fill="currentColor"></path></svg>
      </button>
      <button className="profile">
        <div class="_2LKdO6O3n25FhC" title="Rodrigo Brinate (rodrigobrinate)"><span title="Rodrigo Brinate (rodrigobrinate)" class="SETnvPbUKHW-cx" style={{style}}>RB</span></div>
      </button>
</div>
    </header>

    <div className="sub-header">
      <div className="flex test">
            <div className="flex">
             
                <button className="sub-quadros">
                  <svg width="24" className="sub-header" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z" fill="currentColor"></path></svg>
                  <p>Quadros</p>
                  <svg width="24" className="sub-header" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path></svg>
                </button>

                <button className="sub-cronograma">
                  <p>Cronograma</p>
                </button>

                <button className="star">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)'}}><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                </button>

                <div className="linha"></div>

               <div className="flex">
                  <button className="sub-cronograma2">
                    <p>cronograma</p>
                  </button>
                  <div className="linha"></div>
                  <button className="area-trabalho" >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"><path d="M1712 4840 c-410 -35 -784 -273 -994 -634 -53 -91 -104 -217 -135 -336 -34 -130 -43 -372 -19 -510 44 -251 158 -481 331 -668 36 -38 65 -72 65 -75 0 -2 -35 -25 -78 -50 -414 -240 -728 -676 -836 -1158 -40 -179 -48 -302 -44 -676 l3 -341 31 -39 c17 -21 46 -47 65 -58 34 -20 52 -20 2459 -20 2407 0 2425 0 2459 20 19 11 48 37 65 58 l31 39 3 341 c4 374 -4 497 -44 676 -108 482 -422 918 -836 1158 -43 25 -78 48 -78 51 0 2 26 32 58 66 165 177 277 388 329 621 24 108 28 350 9 470 -107 651 -694 1113 -1353 1064 -215 -16 -435 -89 -593 -195 -19 -13 -40 -24 -47 -24 -6 0 -49 22 -94 50 -214 130 -492 192 -757 170z m261 -375 c351 -61 629 -307 733 -650 25 -82 27 -105 28 -250 0 -147 -2 -167 -28 -250 -202 -660 -997 -880 -1499 -415 -182 168 -287 407 -288 656 -1 121 12 207 43 299 126 369 467 617 859 624 37 0 105 -6 152 -14z m1542 -15 c336 -85 599 -361 671 -704 20 -93 19 -275 -2 -367 -52 -228 -172 -414 -357 -552 -70 -52 -220 -123 -312 -148 -113 -31 -326 -31 -437 -1 -74 20 -214 76 -231 92 -5 4 16 45 46 91 147 226 210 435 210 699 1 265 -64 485 -207 705 -31 47 -56 88 -56 90 0 22 225 100 330 115 93 13 252 4 345 -20z m-2101 -2094 c128 -44 267 -67 410 -67 150 0 258 17 402 62 l101 32 99 -47 c191 -91 326 -187 465 -333 179 -188 296 -405 361 -673 29 -120 30 -135 35 -408 l5 -282 -1461 0 -1461 0 0 251 c0 293 12 394 70 569 113 346 355 641 669 817 67 38 209 103 225 103 5 0 41 -11 80 -24z m2504 -31 c153 -73 284 -165 408 -289 170 -171 280 -349 354 -576 58 -175 70 -276 70 -569 l0 -251 -543 0 -544 0 -6 272 c-6 277 -17 380 -58 543 -70 282 -213 550 -413 773 -31 34 -56 64 -56 65 0 1 63 1 140 -1 156 -4 296 17 425 62 40 15 82 23 99 21 16 -3 72 -25 124 -50z"/></g></svg>
                    <p>Visível à Área de trabalho</p>
                  </button><div className="linha"></div>
             </div>
            </div>
      </div>







     





      <div className="profile-convidar flex">
          <button className="profile2">
            <div class="_2LKdO6O3n25FhC" title="Rodrigo Brinate (rodrigobrinate)"><span title="Rodrigo Brinate (rodrigobrinate)" class="SETnvPbUKHW-cx" style={{style}}>RB</span></div>
            <img width="10px" src="https://a.trellocdn.com/prgb/dist/images/chevron.88a4454280d68a816b89.png" />
          </button>
          <button className="sub-cronograma2">
            <p>convidar</p>
          </button>
      </div>

    
      <div className="end">
        <button className="sub-automacao">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M8.21234 2.79947C8.29833 2.61633 8.48261 2.49955 8.68494 2.5L15.3137 2.51465C15.5157 2.51509 15.6993 2.63238 15.7846 2.81556C15.87 2.99874 15.8416 3.21473 15.7119 3.36971L12.1298 7.65085H15.1664C15.3797 7.65085 15.5715 7.78094 15.6503 7.97916C15.7292 8.17738 15.6792 8.40365 15.5242 8.55019L5.54499 17.9827C5.35867 18.1588 5.07191 18.1731 4.86897 18.0165C4.66602 17.8598 4.60726 17.5788 4.73044 17.3539L7.87765 11.6092H4.89583C4.71761 11.6092 4.55176 11.5181 4.4562 11.3676C4.36064 11.2172 4.34863 11.0283 4.42438 10.867L8.21234 2.79947Z" fill="white"/>
          <div xmlns="" id="divScriptsUsed" style={{display: 'none'}}/><script xmlns="" id="globalVarsDetection" src="chrome-extension://cmkdbmfndkfgebldhnkbfhlneefdaaip/js/wrs_env.js"/></svg>
          <p>Automação</p>
        </button>

        <button className="sub-automacao">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="15.000000pt" height="15.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M641 3319 c-161 -28 -294 -100 -416 -223 -75 -75 -99 -107 -138 -186 -66 -133 -82 -199 -82 -350 0 -151 16 -217 82 -350 40 -80 62 -110 143 -191 81 -81 109 -102 190 -142 136 -66 200 -81 350 -81 89 0 144 5 189 18 275 75 482 282 557 557 25 89 25 289 0 378 -74 269 -277 478 -538 551 -85 24 -256 34 -337 19z"/> <path d="M2455 3324 c-309 -50 -553 -265 -637 -561 -29 -102 -31 -295 -4 -392 75 -275 282 -482 557 -557 97 -27 290 -25 392 4 267 76 468 281 543 553 25 89 25 289 0 378 -74 270 -277 477 -538 551 -72 21 -249 34 -313 24z"/> <path d="M4245 3324 c-313 -51 -557 -270 -641 -575 -25 -89 -25 -289 0 -378 75 -275 282 -482 557 -557 97 -27 290 -25 392 4 260 74 464 278 539 537 32 114 32 296 0 410 -39 136 -94 227 -202 335 -107 107 -200 163 -330 200 -74 21 -250 34 -315 24z"/> </g></svg>
          <p>Mostrar Menu</p>
        </button>
      </div>
      <br />
</div>




    <main className="main">
      <div  className="card">
        <h3>title card</h3>
        <div className="content">
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
        </div>
        <div>
        <svg className="add-card" width="16" height="16" role="presentation"  fill="#EBECF0" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
           <input className="add-card" placeholder="adicionar outro cartão" type="text" />
        </div>
      </div>



      <div  className="card">
        <h3>title card</h3>
        <div className="content">
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
        </div>
        <div>
        <svg className="add-card" width="16" height="16" role="presentation"  fill="#EBECF0" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
           <input className="add-card" placeholder="adicionar outro cartão" type="text" />
        </div>
      </div>



      <div  className="card">
        <h3>title card</h3>
        <div className="content">
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
        </div>
        <div>
        <svg className="add-card" width="16" height="16" role="presentation"  fill="#EBECF0" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
           <input className="add-card" placeholder="adicionar outro cartão" type="text" />
        </div>
      </div>






      <div  className="card">
        <h3>title card</h3>
        <div className="content">
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
        </div>
        <div>
        <svg className="add-card" width="16" height="16" role="presentation"  fill="#EBECF0" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
           <input className="add-card" placeholder="adicionar outro cartão" type="text" />
        </div>
      </div>




      <div  className="card">
        <h3>title card</h3>
        <div className="content">
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
        </div>
        <div>
        <svg className="add-card" width="16" height="16" role="presentation"  fill="#EBECF0" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
           <input className="add-card" placeholder="adicionar outro cartão" type="text" />
        </div>
      </div>





      <div  className="card">
        <h3>title card</h3>
        <div className="content">
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
          <div className="subcard"><p>teste</p></div>
        </div>
        <div>
        <svg className="add-card" width="16" height="16" role="presentation"  fill="#EBECF0" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
           <input className="add-card" placeholder="adicionar outro cartão" type="text" />
        </div>
      </div>
     
    </main>
    </div>
  );

  
}

export default App;
