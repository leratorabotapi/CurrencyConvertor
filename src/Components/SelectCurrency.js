import React from 'react';
import PropTypes from 'prop-types';
import { NativeSelect } from '@material-ui/core';

const SelectCurrency = ({currencies, onSelectCurrency}) => {

    const filteredCurrencies = currencies.filter(currency => currency.code !== 'AUD');

    return <NativeSelect onChange={(e) => onSelectCurrency(e.target.value)}>
        {
            filteredCurrencies.map(currency => {
                const {code, name} = currency;
                return <option key={code} value={code}>{name}</option>
            })
        }
    </NativeSelect>
}

SelectCurrency.propTypes = {
    currencies: PropTypes.array.isRequired,
    onSelectCurrency: PropTypes.func.isRequired
};

export default SelectCurrency;