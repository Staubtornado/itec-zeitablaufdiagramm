const answers = {
    1: "1234",
    2: "Kotmasters",
    3: "Querdenken",
    4: "Trump"
};

function checkAnswer(elementID) {
    const div_tag = document.getElementById(elementID);
    let answer = div_tag.getElementsByTagName('input').item(0);
    let answerField =  div_tag.getElementsByTagName('div').item(1);

    try {
        answerField.style;
    }
    catch (TypeError) {
        answerField = document.createElement("DIV");
    }

    answerField.style.background="transparent";
    answerField.style.margin="0";
    answerField.style.marginLeft="84%";
    answerField.style.textAlign="left";

    if (answers[elementID]===answer.value) {
        answerField.innerHTML="Richtig!";
        answerField.style.color="#2e8716";

    }
    else {
        answerField.innerHTML="Falsch!";
        answerField.style.color="#871616";
    }
    div_tag.appendChild(answerField);
}

function showSolution(elementID) {
    const div_tag = document.getElementById(elementID);
    let button = div_tag.getElementsByTagName("button").item(1);

    if (button.innerHTML==="Lösung anzeigen") {
        button.innerHTML=answers[elementID];
    }
    else {
        button.innerHTML="Lösung anzeigen";
    }
}

function clickExerciseButton(elementID) {
    const div_tag = document.getElementById(elementID);

    if (div_tag.style.height==="600px") {
        div_tag.style.height='300px';
        div_tag.getElementsByTagName("button").item(0).innerHTML="Aufgabe anzeigen";

        ///////////////////////////////////////////////////////////////////////////////////

        div_tag.getElementsByTagName("button").item(1).remove();
        div_tag.getElementsByTagName("button").item(1).remove();
        div_tag.getElementsByTagName("label").item(0).remove();
    }
    else {
        div_tag.style.height='600px';
        div_tag.getElementsByTagName("button").item(0).innerHTML="Aufgabe einklappen";

        ///////////////////////////////////////////////////////////////////////////////////

        const label = document.createElement("LABEL");
        const input = document.createElement("INPUT");
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Antwort');
        input.required = true;

        label.appendChild(input);
        div_tag.appendChild(label);

        const button1 = document.createElement("BUTTON");
        button1.innerHTML="Antwort prüfen";
        button1.id="checkAnswer";
        button1.setAttribute('onclick', `checkAnswer(${elementID})`);
        button1.style.background="#7F7B82";
        button1.style.margin="0";
        button1.style.display='inline-block';
        button1.style.width="15%";
        button1.style.marginLeft='2.5%';
        button1.style.border="1px solid #444554";

        const button2 = document.createElement("BUTTON");
        button2.innerHTML="Lösung anzeigen";
        button2.id="showSolution";
        button2.setAttribute('onclick', `showSolution(${elementID})`);
        button2.style.background="#E5D0CC";
        button2.style.color="#172121";
        button2.style.margin='0';
        button2.style.display='inline-block';
        button2.style.marginLeft='2.5%';
        button2.style.width="15%";
        button2.style.border="1px solid #444554";

        div_tag.appendChild(button2);
        div_tag.appendChild(button1);
    }
}