
//toon datum
const datumElement = document.getElementById("datum");
const vandaag = new Date().toLocaleDateString("nl-NL");

datumElement.textContent = `Datum: ${vandaag}`;

//toggle leerdoelen dmv button
const toggleButton = document.getElementById("toggleLeerdoelen");
const leerdoelenSection = document.getElementById("leerdoelen");
toggleButton.textContent = "Verberg leerdoelen";

toggleButton.addEventListener("click", () => {
    leerdoelenSection.hidden = !leerdoelenSection.hidden;
    if(leerdoelenSection.hidden) {
        toggleButton.textContent = "Toon leerdoelen";
    } else {
        toggleButton.textContent = "Verberg leerdoelen";
    }
});

//VISIE vullen
const visieTekst = `In 2026 richt ik mij op het versterken van mijn developer skills, naast mijn aanvullende werkzaamheden als test‑coördinator. Ik werk aan een stevig technisch fundament in Java en JavaScript, verdiep mij in kwalitatief software‑ontwerp en onderzoek hoe AI mij en mijn team op een praktische en doelgerichte manier kan ondersteunen in het dagelijks (ontwikkel)werk. Hoewel JavaScript momenteel geen essentiële vereiste is voor mijn werk, zie ik het als een waardevolle uitbreiding die mijn inzetbaarheid en wendbaarheid in de toekomst vergroot.`;
const visieElement = document.getElementById("visie-tekst");
visieElement.textContent = visieTekst;

//LEERDOELEN vullen
const leerdoelenLijst = document.getElementById("leerdoelen-lijst");
const leerdoelen = [
    "Mijn Java‑fundament versterken en toepassen binnen BNU Excasso, zodat ik beter onderbouwde code kan schrijven, begrijpen en onderhouden die aansluit bij de behoeften van mijn team.",
    "Mijn inzicht in kwalitatief software‑ontwerp verdiepen door ontwerpprincipes en best practices toe te passen in de Java‑code, met als doel de leesbaarheid, onderhoudbaarheid en kwaliteit van BNU te verbeteren.",
    "Mijn JavaScript‑vaardigheden verkennen en versterken door praktische oefeningen, gericht op mijn ontwikkeling als developer en mijn toekomstige inzetbaarheid.",
    "Onderzoeken hoe AI‑tools mij en mijn team op een praktische manier kunnen ondersteunen bij ontwerp‑, ontwikkel‑ en testactiviteiten, met focus op concrete toegevoegde waarde in ons dagelijks werk."
];
leerdoelen.forEach((leerdoel) => {
    const li = document.createElement("li");
    li.textContent = leerdoel;
    leerdoelenLijst.appendChild(li);
});

