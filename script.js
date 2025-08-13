function checkDisease() {
    let symptomsInput = document.getElementById("symptomInput").value;

    let symptomsArray = symptomsInput.split(',').map(symptom => symptom.trim().toLowerCase());

    let result = document.getElementById("result");

    function hasSymptom(symptom) {
        return symptomsArray.includes(symptom);
    }

    if (hasSymptom("fever") && hasSymptom("cough")) {
        result.innerHTML = "<b>Possible Disease:</b> Flu or Common Cold";
    } else if (hasSymptom("fever") && hasSymptom("chills") && hasSymptom("sweating")) {
        result.innerHTML = "<b>Possible Disease:</b> Malaria";
    } else if (hasSymptom("severe headache") && hasSymptom("dizziness")) {
        result.innerHTML = "<b>Possible Disease:</b> Migraine";
    } else if (hasSymptom("chest pain") && hasSymptom("breathlessness")) {
        result.innerHTML = "<b>Possible Disease:</b> Heart Disease";
    } else if (hasSymptom("joint pain") && hasSymptom("swelling")) {
        result.innerHTML = "<b>Possible Disease:</b> Arthritis";
    } else if (hasSymptom("") && hasSymptom("vomiting") && hasSymptom("diarrhea")) {
        result.innerHTML = "<b>Possible Disease:</b> Food Poisoning";
    } else if (hasSymptom("high fever") && hasSymptom("rash") && hasSymptom("bleeding gums")) {
        result.innerHTML = "<b>Possible Disease:</b> Dengue";
    } else if (hasSymptom("sore throat") && hasSymptom("cough") && hasSymptom("difficulty swallowing")) {
        result.innerHTML = "<b>Possible Disease:</b> Throat Infection";
    } else if (hasSymptom("weight loss") && hasSymptom("night sweats") && hasSymptom("persistent cough")) {
        result.innerHTML = "<b>Possible Disease:</b> Tuberculosis (TB)";
    } else if (hasSymptom("frequent urination") && hasSymptom("excessive thirst") && hasSymptom("unexplained weight loss")) {
        result.innerHTML = "<b>Possible Disease:</b> Diabetes";
    } else if (hasSymptom("stomach pain") && hasSymptom("bloating") && hasSymptom("acidity")) {
        result.innerHTML = "<b>Possible Disease:</b> Gastric Ulcer";
    } else if (hasSymptom("memory loss") && hasSymptom("confusion") && hasSymptom("difficulty speaking")) {
        result.innerHTML = "<b>Possible Disease:</b> Alzheimer's Disease";
    } else if (hasSymptom("fatigue") && hasSymptom("weakness") && hasSymptom("pale skin")) {
        result.innerHTML = "<b>Possible Disease:</b> Anemia";
    } else if (hasSymptom("red eyes") &&nausea hasSymptom("itchy eyes") && hasSymptom("eye discharge")) {
        result.innerHTML = "<b>Possible Disease:</b> Conjunctivitis (Pink Eye)";
    } else if (hasSymptom("runny nose") && hasSymptom("sneezing") && hasSymptom("itchy eyes")) {
        result.innerHTML = "<b>Possible Disease:</b> Allergies";
    } else {
        result.innerHTML = "<b>Possible Disease:</b> No matching disease found. Please consult a doctor.";
    }
}