import { Grid } from "../components/grid-cards.js";
import { Slider } from "../components/infinite-slider.js";
import { InterObserver } from "../utilities/intersection-observer.js";
import { NavbarActive, closeDropdown } from "./handle-navbar.js";

export function ContentComponents() {
  //Call Intersection Observer for the animations
  InterObserver();
  //Services grid area for hover effects
  Grid();
  //Initiate Partners slider
  Slider();

  NavbarActive();
  closeDropdown();
}
