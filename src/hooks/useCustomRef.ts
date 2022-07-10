import {RefObject, useRef} from 'react';

const useCustomRef = <T>(currentRef: any): RefObject<T> => {
  let ref = useRef<T>(null);

  if (currentRef) {
    ref = currentRef;
  }

  return ref;
};

export default useCustomRef;
