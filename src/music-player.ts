const playlist = {
  mp3: "https://cdn.discordapp.com/attachments/702414518197682216/1272904691977556099/Les_Twins_Music__6lack__Loaded_Gun__AKE_RMX__2023.mp3?ex=66bcac5f&is=66bb5adf&hm=fef9289a7078bb2f2fe9f25be85d420eea52a09ea34b5b909f9b9376b34a7a87&",
};

  export function load(audioElement: HTMLAudioElement): void {
    audioElement.innerHTML = `<source src="${playlist.mp3}" type="audio/mp3">`;
    audioElement.load();
    audioElement.volume = 0.5;
}
