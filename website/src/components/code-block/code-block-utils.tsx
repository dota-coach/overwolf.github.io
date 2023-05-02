import React, { createContext } from "react";

export const CodeBlockContext = createContext('');
export const MainGroupContext = createContext('');
export const SubGroupContext = createContext('');

export const bracketEndCheck = (index: any, length: any) => {
  if(length == undefined) { // give `)` to single item
    return (<span className='bracket'>{`)`}</span>)
  }
  else if (index != length -1) { //hide ',' from last item
    return <span className='bracket'>{`,`}</span>;
  }
  else if (index == length -1) { //give `)` to last item
    return (<span className='bracket'>{`)`}</span>)
  }
}

export const checkIfPropertiesExpanded = (triggersSection: any) => {
  const collapsedTriggers = triggersSection.querySelectorAll('.is-open');
  const closeAllBtn = triggersSection.parentElement.previousElementSibling.querySelector('.close-all-btn');
  if(collapsedTriggers.length != 0) {
    closeAllBtn.classList.remove('hidden');
  } else {
    closeAllBtn.classList.add('hidden');
  }
}

export const checkHashUrl = (codeBlock: any) => {
  const url = location.hash;

  if(url != '') {
    console.log(url)
  }

}