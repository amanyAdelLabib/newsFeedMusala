import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const Setting: React.FC = () => {
  const dispatch: Function = useDispatch();

  return (
    <Text> setting</Text>
  );
};
