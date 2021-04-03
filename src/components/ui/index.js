import {
  ThemedColumn,
  ThemedContainer,
  ThemedRow,
  ThemedTouchable,
} from './basic';

import React from 'react';
import {ThemedButton} from './button';
import {ThemedProdukPulsa} from './card';
import {ThemedTextInput} from './form';
import {ThemedTypography} from './typography';

//basic
export const UIContainer = props => <ThemedContainer {...props} />;
export const UIRow = props => <ThemedRow {...props} />;
export const UIColumn = props => <ThemedColumn {...props} />;
export const UITouchable = props => <ThemedTouchable {...props} />;

//typography
export const UITypography = props => <ThemedTypography {...props} />;

//form
export const UITextInput = props => <ThemedTextInput {...props} />;

//button
export const UIButton = props => <ThemedButton {...props} />;
