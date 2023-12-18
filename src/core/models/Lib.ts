import Film from "./Film";
import Series from "./Series";

export default interface Lib {
  films: Film[]
  series: Series[]
  receit: (Series | Film)[]
}