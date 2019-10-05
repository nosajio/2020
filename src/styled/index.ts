import { Theme } from './theme';
import styledBase, {
  css as cssBase,
  ThemedStyledInterface,
  BaseThemedCssFunction,
} from 'styled-components';

const styled = styledBase as ThemedStyledInterface<Theme>;
export default styled;

export const css = cssBase as BaseThemedCssFunction<Theme>;