import { Grid } from "../components/grid-cards.js";
import { Slider } from "../components/infinite-slider.js";
import { InterObserver } from "../utilities/intersection-observer.js";
import {
  NavbarActive,
  closeDropdown,
  closeMobileNavbar,
} from "./handle-navbar.js";
import { Masonry } from "./masonry.js";
import { Overlay } from "../components/full-overlay.js";

export function ContentComponents() {
  //Call Intersection Observer for the animations
  InterObserver();
  //Services grid area for hover effects
  Grid();
  //Initiate Partners slider
  Slider();

  //Functions to handle the navbar actions on SPA
  NavbarActive();
  closeDropdown();
  closeMobileNavbar();

  //Masonry Grid
  Masonry();

  //Overlay check
  Overlay();
}
