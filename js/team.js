
class Team {
  constructor(city, name) {
    this.city = city;
    this.name = name;
    this.offRating = DEFAULT_OFF_RATING;
    this.defRating = DEFAULT_DEF_RATING;
  }

  updateRatings(offense, defense) {
    this.offRating = offense;
    this.defRating = defense;
  }

  getFullName() {
    return this.city + " " + this.name;
  }

  getOffensiveRating() {
    return this.offRating;
  }

  getDefensiveRating() {
    return this.defRating;
  }
}
