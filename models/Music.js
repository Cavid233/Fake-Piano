class Music {
  constructor(title, imgScr, pianoNotes) {
    this.id = Math.random().toString();
    this.title = title;
    this.pianoNotes = [...pianoNotes];
    this.imgScr = imgScr;
  }
}

export default Music;
