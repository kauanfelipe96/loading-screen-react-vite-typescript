const playlist = {
  mp3: "https://cdn.discordapp.com/attachments/702414518197682216/1272254266526007337/Les_Twins_Music__6lack__Loaded_Gun__AKE_RMX__2023.mp3?ex=66baf75e&is=66b9a5de&hm=299dcce31db8a522a58178438e7fd63ede1de3266e10c2ccd90396b14e6418c6&",
};

const music = document.getElementById("music") as HTMLMediaElement;

export function load(music: HTMLAudioElement): void {
  music.innerHTML = `<source src="${playlist.mp3}" type="audio/mp3">`;
  music.load();
  music.volume = 0.5;
  setTimeout(() => music.play(), 1000);
}
