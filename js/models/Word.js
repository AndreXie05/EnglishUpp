// Uma palavra do vocabulário
class Word {
  constructor(themeId, [en, ipa, pos, pt, exEn, exPt]) {
    this.themeId = themeId;
    this.en = en;
    this.ipa = ipa;
    this.pos = pos;
    this.pt = pt;
    this.exEn = exEn;
    this.exPt = exPt;
  }

  get key() {
    return this.en;
  }
}
