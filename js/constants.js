const BALL_MOVEMENT_SKILL_DIVISOR = 40.0;
const ATTACK_LIMIT_BASE_VALUE = 4.5; // a measure of how far down the field teams need to reach to trigger an attack sequence
const ATTACK_LIMIT_SKILL_MODIFIER = 0.01;
const RESET_TO_DIFFERENCE = 2.0; // a measure of roughly how far the ball gets cleared out
const DEFAULT_OFF_RATING = 50;
const DEFAULT_DEF_RATING = 50;
const DEFAULT_MODIFIERS = {
  homeOff : DEFAULT_OFF_RATING,
  homeDef : DEFAULT_DEF_RATING,
  awayOff : DEFAULT_OFF_RATING,
  awayDef : DEFAULT_DEF_RATING,
};
