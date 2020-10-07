// before

/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
/* eslint-disable fp/no-loops */
/* eslint-disable fp/no-mutating-methods */
export const capitalizeOddIndexChars = (input: string): string => {
  const splittedInput = input.split("");
  const withOddIndexCapitalized = [];

  for (let index = 0; index < splittedInput.length; index++) {
    let currentCharacter = splittedInput[index];

    const isOddIndex = index % 2 !== 0;
    if (isOddIndex) {
      currentCharacter = currentCharacter.toUpperCase();
    }

    withOddIndexCapitalized.push(currentCharacter);
  }

  const result = withOddIndexCapitalized.join("");
  return result;
};

// after

export const capitalizeOddIndexChars_edit = (input: string): string => {
  const splittedInput = input.split("");

  const withOddIndexCapitalized = splittedInput.map(
    (currentCharacter, index) => {
      const isOddIndex = index % 2 !== 0;
      if (!isOddIndex) {
        return currentCharacter;
      }
      return currentCharacter.toUpperCase();
    },
  );

  const result = withOddIndexCapitalized.join("");
  return result;
};
