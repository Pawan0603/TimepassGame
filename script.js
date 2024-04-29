let A1 = false, A2 = false, A3 = false, B1 = false, B2 = false, B3 = false, C1 = false, C2 = false, C3 = false;
let chaluTurn = 1;
let U1ElemenntBoxBlank = false, U2ElemenntBoxBlank = false;
let U1, U2;
let U1Points = 0, U2Points = 0;
let OldSelectElement;
let TotalRond = 3, RunningRound = 1;

let WhoTurn = ()=>{
    if (chaluTurn == 1){
        document.getElementById("USER1").classList.add("BoxShadow");
        document.getElementById("USER2").classList.remove("BoxShadow");
        document.getElementById("USER1").style.borderColor = "red";
        document.getElementById("USER2").style.borderColor = "yellow";
    }
    else if (chaluTurn == 2) {
        document.getElementById("USER1").classList.remove("BoxShadow");
        document.getElementById("USER2").classList.add("BoxShadow");
        document.getElementById("USER1").style.borderColor = "yellow";
        document.getElementById("USER2").style.borderColor = "red";
    }
}

let AddElement = (id)=>{
    console.log("run Addelement")
    if(chaluTurn == 1){
        document.getElementById(id).classList.add('U1visiblity');
        if(document.getElementById("U1C2").style.visibility == "hidden"){
            document.getElementById("U1C1").style.visibility = "hidden";
            U1ElemenntBoxBlank = true;
            LineMatch();
        }
        else if(document.getElementById("U1C3").style.visibility == "hidden"){
            document.getElementById("U1C2").style.visibility = "hidden";
        }
        else{
            document.getElementById("U1C3").style.visibility = "hidden";
        }
        
        chaluTurn = chaluTurn + 1;
    }
    else if (chaluTurn == 2){
        document.getElementById(id).classList.add('U2visiblity');
        if(document.getElementById("U2C2").style.visibility == "hidden"){
            document.getElementById("U2C1").style.visibility = "hidden";
            U2ElemenntBoxBlank = true;
            LineMatch();
        }
        else if(document.getElementById("U2C3").style.visibility == "hidden"){
            document.getElementById("U2C2").style.visibility = "hidden";
        }
        else{
            document.getElementById("U2C3").style.visibility = "hidden";
        }
        chaluTurn = chaluTurn - 1;
    }
    WhoTurn();
}

let SelectElement = (id)=>{
    console.log("run SelectElement")
    if (document.getElementById(id).classList.contains("U1visiblity") && chaluTurn == 1){
        if (OldSelectElement != null){
            document.getElementById(OldSelectElement).classList.remove('ESelect');
            lineColorNormal();
        }
        document.getElementById(id).classList.add('ESelect');
        lineColorDark(id);
        OldSelectElement = id;
    }
    else if (document.getElementById(id).classList.contains("U2visiblity") && chaluTurn == 2){
        if (OldSelectElement != null){
            document.getElementById(OldSelectElement).classList.remove('ESelect');
            lineColorNormal();
        }
        document.getElementById(id).classList.add('ESelect');
        lineColorDark(id);
        OldSelectElement = id;
    }
}

let MovingElementPC = (id) => {
    console.log("run movingelement")
    if (OldSelectElement != null){
            document.getElementById(OldSelectElement).classList.remove('ESelect');
            document.getElementById(OldSelectElement).classList.remove('U2visiblity');
            document.getElementById(OldSelectElement).classList.remove('U1visiblity');
            lineColorNormal();
            FalseElement(OldSelectElement);
            OldSelectElement = null;
            LineMatch();
        }
    AddElement(id);
    
}

let lineColorNormal = () => {
    document.getElementById("a1a2").classList.remove("highLightLigth");
    document.getElementById("a2a3").classList.remove("highLightLigth");
    document.getElementById("a1b1").classList.remove("highLightLigth");
    document.getElementById("a1b2").classList.remove("highLightLigth");
    document.getElementById("a2b2").classList.remove("highLightLigth");
    document.getElementById("a3b2").classList.remove("highLightLigth");
    document.getElementById("a3b3").classList.remove("highLightLigth");
    document.getElementById("b1b2").classList.remove("highLightLigth");
    document.getElementById("b2b3").classList.remove("highLightLigth");
    document.getElementById("b1c1").classList.remove("highLightLigth");
    document.getElementById("b2c1").classList.remove("highLightLigth");
    document.getElementById("b2c2").classList.remove("highLightLigth");
    document.getElementById("b2c3").classList.remove("highLightLigth");
    document.getElementById("b3c3").classList.remove("highLightLigth");
    document.getElementById("c1c2").classList.remove("highLightLigth");
    document.getElementById("c2c3").classList.remove("highLightLigth");
}

let lineColorDark = (id) => {
    if (id == "EA1"){
        if(A2 == false){document.getElementById("a1a2").classList.add("highLightLigth")}
        if(B2 == false){document.getElementById("a1b2").classList.add("highLightLigth")}
        if(B1 == false){document.getElementById("a1b1").classList.add("highLightLigth")}
    }
    else if (id == "EA2"){
        if(A1 == false){document.getElementById("a1a2").classList.add("highLightLigth")}
        if(A3 == false){document.getElementById("a2a3").classList.add("highLightLigth")}
        if(B2 == false){document.getElementById("a2b2").classList.add("highLightLigth")}
    }
    else if (id == "EA3"){
        if(A2 == false){document.getElementById("a2a3").classList.add("highLightLigth")}
        if(B2 == false){document.getElementById("a3b2").classList.add("highLightLigth")}
        if(B3 == false){document.getElementById("a3b3").classList.add("highLightLigth")}
    }
    else if (id == "EB1"){
        if(A1 == false){document.getElementById("a1b1").classList.add("highLightLigth")}
        if(B2 == false){document.getElementById("b1b2").classList.add("highLightLigth")}
        if(C1 == false){document.getElementById("b1c1").classList.add("highLightLigth")}
    }
    else if (id == "EB2"){
        if(A1 == false){document.getElementById("a1b2").classList.add("highLightLigth")}
        if(A2 == false){document.getElementById("a2b2").classList.add("highLightLigth")}
        if(A3 == false){document.getElementById("a3b2").classList.add("highLightLigth")}
        
        if(B1 == false){document.getElementById("b1b2").classList.add("highLightLigth")}
        if(B3 == false){document.getElementById("b2b3").classList.add("highLightLigth")}
        
        if(C1 == false){document.getElementById("b2c1").classList.add("highLightLigth")}
        if(C2 == false){document.getElementById("b2c2").classList.add("highLightLigth")}
        if(C3 == false){document.getElementById("b2c3").classList.add("highLightLigth")}
    }
    else if (id == "EB3"){
        if(A3 == false){document.getElementById("a3b3").classList.add("highLightLigth")}
        if(B2 == false){document.getElementById("b2b3").classList.add("highLightLigth")}
        if(C3 == false){document.getElementById("b3c3").classList.add("highLightLigth")}
    }
    else if (id == "EC1"){
        if(B1 == false){document.getElementById("b1c1").classList.add("highLightLigth")}
        if(B2 == false){document.getElementById("b2c1").classList.add("highLightLigth")}
        if(C2 == false){document.getElementById("c1c2").classList.add("highLightLigth")}
    }
    else if (id == "EC2"){
        if(B2 == false){document.getElementById("b2c2").classList.add("highLightLigth")}
        if(C1 == false){document.getElementById("c1c2").classList.add("highLightLigth")}
        if(C3 == false){document.getElementById("c2c3").classList.add("highLightLigth")}
    }
    else if (id == "EC3"){
        if(B2 == false){document.getElementById("b2c3").classList.add("highLightLigth")}
        if(B3 == false){document.getElementById("b3c3").classList.add("highLightLigth")}
        if(C2 == false){document.getElementById("c2c3").classList.add("highLightLigth")}
    }
    
}

let FalseElement = (OldSelectElement) => {
    if(OldSelectElement == "EA1"){A1 = false;}
    else if(OldSelectElement == "EA2"){A2 = false;}
    else if(OldSelectElement == "EA3"){A3 = false;}
    else if(OldSelectElement == "EB1"){B1 = false;}
    else if(OldSelectElement == "EB2"){B2 = false;}
    else if(OldSelectElement == "EB3"){B3 = false;}
    else if(OldSelectElement == "EC1"){C1 = false;}
    else if(OldSelectElement == "EC2"){C2 = false;}
    else if(OldSelectElement == "EC3"){C3 = false;}
}

let RemoveAllElement = ()=> {
    if(document.getElementById("EA1").classList.contains("U1visiblity")){document.getElementById("EA1").classList.remove('U1visiblity');}
    if(document.getElementById("EA1").classList.contains("U2visiblity")){document.getElementById("EA1").classList.remove('U2visiblity');}
    
    if(document.getElementById("EA2").classList.contains("U1visiblity")){document.getElementById("EA2").classList.remove('U1visiblity');}
    if(document.getElementById("EA2").classList.contains("U2visiblity")){document.getElementById("EA2").classList.remove('U2visiblity');}
    
    if(document.getElementById("EA3").classList.contains("U1visiblity")){document.getElementById("EA3").classList.remove('U1visiblity');}
    if(document.getElementById("EA3").classList.contains("U2visiblity")){document.getElementById("EA3").classList.remove('U2visiblity');}
    
    if(document.getElementById("EB1").classList.contains("U1visiblity")){document.getElementById("EB1").classList.remove('U1visiblity');}
    if(document.getElementById("EB1").classList.contains("U2visiblity")){document.getElementById("EB1").classList.remove('U2visiblity');}
    
    if(document.getElementById("EB2").classList.contains("U1visiblity")){document.getElementById("EB2").classList.remove('U1visiblity');}
    if(document.getElementById("EB2").classList.contains("U2visiblity")){document.getElementById("EB2").classList.remove('U2visiblity');}
    
    if(document.getElementById("EB3").classList.contains("U1visiblity")){document.getElementById("EB3").classList.remove('U1visiblity');}
    if(document.getElementById("EB3").classList.contains("U2visiblity")){document.getElementById("EB3").classList.remove('U2visiblity');}
    
    if(document.getElementById("EC1").classList.contains("U1visiblity")){document.getElementById("EC1").classList.remove('U1visiblity');}
    if(document.getElementById("EC1").classList.contains("U2visiblity")){document.getElementById("EC1").classList.remove('U2visiblity');}
    
    if(document.getElementById("EC2").classList.contains("U1visiblity")){document.getElementById("EC2").classList.remove('U1visiblity');}
    if(document.getElementById("EC2").classList.contains("U2visiblity")){document.getElementById("EC2").classList.remove('U2visiblity');}
    
    if(document.getElementById("EC3").classList.contains("U1visiblity")){document.getElementById("EC3").classList.remove('U1visiblity');}
    if(document.getElementById("EC3").classList.contains("U2visiblity")){document.getElementById("EC3").classList.remove('U2visiblity');}
    
    document.getElementById("U1C1").style.visibility = "visible";
    document.getElementById("U1C2").style.visibility = "visible";
    document.getElementById("U1C3").style.visibility = "visible";
    document.getElementById("U2C1").style.visibility = "visible";
    document.getElementById("U2C2").style.visibility = "visible";
    document.getElementById("U2C3").style.visibility = "visible";
    
    A1 = false;
    A2 = false;
    A3 = false;
    B1 = false;
    B2 = false;
    B3 = false;
    C1 = false;
    C2 = false;
    C3 = false;
    
    U1ElemenntBoxBlank = false;
    U2ElemenntBoxBlank = false;
}

let RoundComplet = (Winner)=>{
    console.log("run roundComplet");
    if(TotalRond > RunningRound){
        console.log("run roundComplet if conditions");
        document.getElementById("U2Score").innerHTML = `${U2Points}`;
        document.getElementById("U1Score").innerHTML = `${U1Points}`;
        
        
        RemoveAllElement();
        RunningRound = RunningRound + 1;
    }
    else{
        let openPopup = () => {
                document.getElementById("popupbox").innerHTML = `<h2>Congratulations!</h2>
                <h3>${Winner} is Winner...!</h3>
                <p>${U2} Score is ${U2Points}</p>
                <p>${U1} Score is ${U1Points}</p>
                <button class="OkBtn" onclick="closegame()">Close</button>
                `;
                document.getElementById("popupbox").classList.add('openPopup');
            }
            openPopup();
    }
}

let closegame = ()=>{
	document.getElementById("popupbox").classList.add('openPopup');
	document.location.reload();
}

let U1GetPoint = ()=> {
    console.log("run U1GetPoint");
    U1Points = U1Points + 1;
	let openPopup = () => {
                document.getElementById("popupbox").innerHTML = `
                <h3>${U1} get Point...</h3>
                <p>${U1} Score is ${U1Points}</p>
                <p>${U2} Score is ${U2Points}</p>
                <button class="OkBtn" onclick="closePopUp()">Close</button>
                `;
                document.getElementById("popupbox").classList.add('openPopup');
            }
            openPopup(U1);
}

let U2GetPoint = ()=> {
    console.log("run U2GetPoint");
    U2Points = U2Points + 1;
	let openPopup = () => {
                document.getElementById("popupbox").innerHTML = `
                <h3>${U2} get point...</h3>
                <p>${U2} Score is ${U2Points}</p>
                <p>${U1} Score is ${U1Points}</p>
                <button class="OkBtn" onclick="closePopUp()">Close</button>
                `;
                document.getElementById("popupbox").classList.add('openPopup');
            }
            openPopup(U2);
}

let closePopUp = (UR) =>{
	document.getElementById("popupbox").classList.remove('openPopup');
	RoundComplet(UR);
}

let LineMatch = () => {
    console.log("run LineMatch");
    if ((document.getElementById("EA1").classList.contains("U1visiblity") && document.getElementById("EA2").classList.contains("U1visiblity") && document.getElementById("EA3").classList.contains("U1visiblity")) || (document.getElementById("EA1").classList.contains("U2visiblity") && document.getElementById("EA2").classList.contains("U2visiblity") && document.getElementById("EA3").classList.contains("U2visiblity"))){
        if(document.getElementById("EA2").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EA2").classList.contains("U2visiblity")){U2GetPoint();}
    }
    else if ((document.getElementById("EB1").classList.contains("U1visiblity") && document.getElementById("EB2").classList.contains("U1visiblity") && document.getElementById("EB3").classList.contains("U1visiblity")) || (document.getElementById("EB1").classList.contains("U2visiblity") && document.getElementById("EB2").classList.contains("U2visiblity") && document.getElementById("EB3").classList.contains("U2visiblity"))){
        if(document.getElementById("EB2").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EB2").classList.contains("U2visiblity")){U2GetPoint();}
    }
    else if ((document.getElementById("EC1").classList.contains("U1visiblity") && document.getElementById("EC2").classList.contains("U1visiblity") && document.getElementById("EC3").classList.contains("U1visiblity")) || (document.getElementById("EC1").classList.contains("U2visiblity") && document.getElementById("EC2").classList.contains("U2visiblity") && document.getElementById("EC3").classList.contains("U2visiblity"))){
        if(document.getElementById("EC2").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EC2").classList.contains("U2visiblity")){U2GetPoint();}
    }
    else if ((document.getElementById("EA1").classList.contains("U1visiblity") && document.getElementById("EB1").classList.contains("U1visiblity") && document.getElementById("EC1").classList.contains("U1visiblity")) || (document.getElementById("EA1").classList.contains("U2visiblity") && document.getElementById("EB1").classList.contains("U2visiblity") && document.getElementById("EC1").classList.contains("U2visiblity"))){
        if(document.getElementById("EB1").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EB1").classList.contains("U2visiblity")){U2GetPoint();}
    }
    else if ((document.getElementById("EA2").classList.contains("U1visiblity") && document.getElementById("EB2").classList.contains("U1visiblity") && document.getElementById("EC2").classList.contains("U1visiblity")) || (document.getElementById("EA2").classList.contains("U2visiblity") && document.getElementById("EB2").classList.contains("U2visiblity") && document.getElementById("EC2").classList.contains("U2visiblity"))){
        if(document.getElementById("EB2").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EB2").classList.contains("U2visiblity")){U2GetPoint();}
    }
    else if ((document.getElementById("EA3").classList.contains("U1visiblity") && document.getElementById("EB3").classList.contains("U1visiblity") && document.getElementById("EC3").classList.contains("U1visiblity")) || (document.getElementById("EA3").classList.contains("U2visiblity") && document.getElementById("EB3").classList.contains("U2visiblity") && document.getElementById("EC3").classList.contains("U2visiblity"))){
        if(document.getElementById("EB3").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EB3").classList.contains("U2visiblity")){U2GetPoint();}
    }
    else if ((document.getElementById("EA1").classList.contains("U1visiblity") && document.getElementById("EB2").classList.contains("U1visiblity") && document.getElementById("EC3").classList.contains("U1visiblity")) || (document.getElementById("EA1").classList.contains("U2visiblity") && document.getElementById("EB2").classList.contains("U2visiblity") && document.getElementById("EC3").classList.contains("U2visiblity"))){
        if(document.getElementById("EB2").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EB2").classList.contains("U2visiblity")){U2GetPoint();}
    }
    else if ((document.getElementById("EA3").classList.contains("U1visiblity") && document.getElementById("EB2").classList.contains("U1visiblity") && document.getElementById("EC1").classList.contains("U1visiblity")) || (document.getElementById("EA3").classList.contains("U2visiblity") && document.getElementById("EB2").classList.contains("U2visiblity") && document.getElementById("EC1").classList.contains("U2visiblity"))){
        if(document.getElementById("EB2").classList.contains("U1visiblity")){U1GetPoint();}
        else if(document.getElementById("EB2").classList.contains("U2visiblity")){U2GetPoint();}
    }
}

let GBtn = (id)=>{
    let ElementVisiblity = false;
    console.log("oldelement = "+ OldSelectElement);
    if (document.getElementById(id).classList.contains("U1visiblity") || document.getElementById(id).classList.contains("U2visiblity") ){
        ElementVisiblity = true;
    }
    console.log(id);
    if(id == "EA1"){
        if(A1 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            A1 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U2ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EA2" || OldSelectElement == "EB1" || OldSelectElement == "EB2"){A1 = true; MovingElementPC(id); }
        }
        
    }
    else if (id == "EA2"){
        if(A2 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            A2 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EA1" || OldSelectElement == "EA3" || OldSelectElement == "EB2"){ A2 = true; MovingElementPC(id);}
        }
    }
    else if (id == "EA3"){
        if(A3 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            A3 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EA2" || OldSelectElement == "EB3" || OldSelectElement == "EB2"){A3 = true; MovingElementPC(id); }
        }
    }
//    ===========================================================================================
    else if (id == "EB1"){
        if(B1 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            B1 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EA1" || OldSelectElement == "EB2" || OldSelectElement == "EC1"){B1 = true; MovingElementPC(id); }
        }
    }
    else if (id == "EB2"){
        if(B2 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            B2 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EA1" || OldSelectElement == "EA2" || OldSelectElement == "EA3" || OldSelectElement == "EB1" || OldSelectElement == "EB3" || OldSelectElement == "EC1" || OldSelectElement == "EC2" || OldSelectElement == "EC3"){B2 = true; MovingElementPC(id); }
        }
    }
    else if (id == "EB3"){
        if(B3 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            B3 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EA3" || OldSelectElement == "EB2" || OldSelectElement == "EC3"){B3 = true; MovingElementPC(id); }
        }
    }
//    ==============================================================================================
     else if (id == "EC1"){
        if(C1 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            C1 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
         else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EB1" || OldSelectElement == "EB2" || OldSelectElement == "EC2"){C1 = true; MovingElementPC(id); }
        }
    }
    else if (id == "EC2"){
        if(C2 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            C2 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EC1" || OldSelectElement == "EB2" || OldSelectElement == "EC3"){C2 = true; MovingElementPC(id); }
        }
    }
    else if (id == "EC3"){
        if(C3 == false && (U1ElemenntBoxBlank == false || U2ElemenntBoxBlank == false)){
            C3 = true;
            AddElement(id);
        }
        else if(chaluTurn == 1 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(chaluTurn == 2 && U1ElemenntBoxBlank == true && ElementVisiblity == true){
            SelectElement(id);
        }
        else if(ElementVisiblity == false && OldSelectElement != null){
            if(OldSelectElement == "EC2" || OldSelectElement == "EB3" || OldSelectElement == "EB2"){C3 = true; MovingElementPC(id); }
        }
    }
}


let startGame = ()=>{
	TotalRond = document.getElementById("round").value;
    U1 = document.getElementById("user1").value;
    U2 = document.getElementById("user2").value;


    if (document.getElementById("user1").value != '' && document.getElementById("user2").value != '' && document.getElementById("round").value != 'Choose...') {
        document.getElementById("win").innerHTML = `<div class="gamedivbox">
		<div>
	<h4 class="rounds">Round : 1/5</h4>
	</div>
	<div class="user2" id="USER2">
		<div class="nameBox">
            <p class="username">${U2}</p>
            <hr class="hr">
            <div class="ciruleBox">
                <div class="circule U2visiblity" id="U2C1"></div>
                <div class="circule U2visiblity" id="U2C2"></div>
                <div class="circule U2visiblity" id="U2C3"></div>
            </div>
        </div>
        <div class="ScoreBox">
            <h2 id="U2Score">0</h2>
        </div>
	</div>
	<div class="Gbox">
		<div class="GameBox">
			<div class="UpperLines">
				<div id="a1a2" class="LineColor HLine"></div>
				<div id="a2a3" class="LineColor HLine"></div>
			</div>
			<div class="UpperWL">
				<div id="a1b1" class="LineColor WLine WLine1"></div>
				<div id="a1b2" class="LineColor RLLine"></div>
				<div id="a2b2" class="LineColor WLine MidWL"></div>
                <div id="a3b2" class="LineColor LRLine"></div>
				<div id="a3b3" class="LineColor WLine WLine2"></div>
			</div>
			<div class="MiddelLines">
				<div id="b1b2" class="LineColor HLine"></div>
				<div id="b2b3" class="LineColor HLine"></div>
			</div>
			<div class="LoverWL">
				<div id="b1c1" class="LineColor WLine WLine1"></div>
                <div id="b2c1" class="LineColor RLLine2"></div>
				<div id="b2c2" class="LineColor WLine MidWL"></div>
                <div id="b2c3" class="LineColor LRLine2"></div>
				<div id="b3c3" class="LineColor WLine WLine2"></div>
			</div>
			<div class="LoverLines">
				<div id="c1c2" class="LineColor HLine"></div>
				<div id="c2c3" class="LineColor HLine"></div>
			</div>
		</div>
<!--        ===========================================================================-->
        <div id="ElementBox">
            <div class="GElement " id="EA1" onclick="GBtn(id)"></div>
            <div class="GElement " id="EA2" onclick="GBtn(id)"></div>
            <div class="GElement " id="EA3" onclick="GBtn(id)"></div>
        
            <div class="GElement " id="EB1" onclick="GBtn(id)"></div>
            <div class="GElement " id="EB2" onclick="GBtn(id)"></div>
            <div class="GElement " id="EB3" onclick="GBtn(id)"></div>
            
            <div class="GElement " id="EC1" onclick="GBtn(id)"></div>
            <div class="GElement " id="EC2" onclick="GBtn(id)"></div>
            <div class="GElement " id="EC3" onclick="GBtn(id)"></div>
        </div>
	</div>
	<div class="user1" id="USER1">
		<div class="nameBox">
            <p class="username">${U1}</p>
            <hr class="hr">
            <div class="ciruleBox">
                <div class="circule U1visiblity" id="U1C1"></div>
                <div class="circule U1visiblity" id="U1C2"></div>
                <div class="circule U1visiblity" id="U1C3"></div>
            </div>
        </div>
        <div class="ScoreBox">
            <h2 id="U1Score">0</h2>
        </div>
	</div>
	
	<div class="popupbox " id="popupbox">
    </div>
	</div>`
     WhoTurn();   
    }
    else {
        alert("Plz enter the name of users and select round !!!")
    }
	
	
}


