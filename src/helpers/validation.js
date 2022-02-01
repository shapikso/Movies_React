import {REGEX} from './regExp';
import * as constants from '../constants/errorMessages';

export const isValidName = (name) => {
    switch (true) {
        case (!REGEX.STARTS_WITH_UPPERCASE_LETTER.test(name)):
            return constants.MESSAGE_UPPERCASE_LETTER;
        case (!REGEX.ONLY_LATIN_LETTERS.test(name)):
            return constants.MESSAGE_LATIN_LETTER;
        case (name.length < 2):
            return constants.MESSAGE_MIN_CHARACTERS;
        default:
            return '';
    }
};
export const isValidLogin = (login) => {
    switch (true) {
        case (!REGEX.ONLY_LATIN_LETTERS_AND_NUMBERS.test(login)):
            return constants.MESSAGE_LATIN_LETTER_AND_NUMBERS;
        case (login.length < 4 || login.length > 20):
            return constants.MESSAGE_RANGE_CHARACTERS;
        case (!REGEX.STARTS_WITH_LETTER.test(login)):
            return constants.MESSAGE_START_WITH_LETTER;
        default:
            return '';
    }
};

export const isValidPassword = (password) => {
    switch (true) {
        case (password.length < 8):
            return constants.MESSAGE_MIN_SYMBOLS;
        case (!REGEX.MINIMUM_ONE_NUMBER.test(password)):
            return constants.MESSAGE_MIN_NUMBERS;
        case (!REGEX.MINIMUM_ONE_LOWERCASE.test(password)):
            return constants.MESSAGE_LOWER_CASE_LETTER;
        case (!REGEX.MINIMUM_ONE_UPPERCASE.test(password)):
            return constants.MESSAGE_ONE_UPPERCASE_LETTER;
        default:
            return  '';
    }
};