(function($) {
    /**
     * Chilean Spanish language package
     * Translated by @marceloampuerop6
     */
    FormValidation.I18n = $.extend(true, FormValidation.I18n, {
        'es_CL': {
            base64: {
                'default': 'Por favor ingrese un valor vÃ¡lido en base 64'
            },
            between: {
                'default': 'Por favor ingrese un valor entre %s y %s',
                notInclusive: 'Por favor ingrese un valor sÃ³lo entre %s and %s'
            },
            bic: {
                'default': 'Por favor ingrese un nÃºmero BIC vÃ¡lido'
            },
            callback: {
                'default': 'Por favor ingrese un valor vÃ¡lido'
            },
            choice: {
                'default': 'Por favor ingrese un valor vÃ¡lido',
                less: 'Por favor elija %s opciones como mÃ­nimo',
                more: 'Por favor elija %s optiones como mÃ¡ximo',
                between: 'Por favor elija de %s a %s opciones'
            },
            color: {
                'default': 'Por favor ingrese un color vÃ¡lido'
            },
            creditCard: {
                'default': 'Por favor ingrese un nÃºmero vÃ¡lido de tarjeta de crÃ©dito'
            },
            cusip: {
                'default': 'Por favor ingrese un nÃºmero CUSIP vÃ¡lido'
            },
            cvv: {
                'default': 'Por favor ingrese un nÃºmero CVV vÃ¡lido'
            },
            date: {
                'default': 'Por favor ingrese una fecha vÃ¡lida',
                min: 'Por favor ingrese una fecha posterior a %s',
                max: 'Por favor ingrese una fecha anterior a %s',
                range: 'Por favor ingrese una fecha en el rango %s - %s'
            },
            different: {
                'default': 'Por favor ingrese un valor distinto'
            },
            digits: {
                'default': 'Por favor ingrese sÃ³lo dÃ­gitos'
            },
            ean: {
                'default': 'Por favor ingrese un nÃºmero EAN vÃ¡lido'
            },
            ein: {
                'default': 'Por favor ingrese un nÃºmero EIN vÃ¡lido'
            },
            emailAddress: {
                'default': 'Por favor ingrese un email vÃ¡lido'
            },
            file: {
                'default': 'Por favor elija un archivo vÃ¡lido'
            },
            greaterThan: {
                'default': 'Por favor ingrese un valor mayor o igual a %s',
                notInclusive: 'Por favor ingrese un valor mayor que %s'
            },
            grid: {
                'default': 'Por favor ingrese un nÃºmero GRId vÃ¡lido'
            },
            hex: {
                'default': 'Por favor ingrese un valor hexadecimal vÃ¡lido'
            },
            iban: {
                'default': 'Por favor ingrese un nÃºmero IBAN vÃ¡lido',
                country: 'Por favor ingrese un nÃºmero IBAN vÃ¡lido en %s',
                countries: {
                    AD: 'Andorra',
                    AE: 'Emiratos Ãrabes Unidos',
                    AL: 'Albania',
                    AO: 'Angola',
                    AT: 'Austria',
                    AZ: 'AzerbaiyÃ¡n',
                    BA: 'Bosnia-Herzegovina',
                    BE: 'BÃ©lgica',
                    BF: 'Burkina Faso',
                    BG: 'Bulgaria',
                    BH: 'BarÃ©in',
                    BI: 'Burundi',
                    BJ: 'BenÃ­n',
                    BR: 'Brasil',
                    CH: 'Suiza',
                    CI: 'Costa de Marfil',
                    CM: 'CamerÃºn',
                    CR: 'Costa Rica',
                    CV: 'Cabo Verde',
                    CY: 'Cyprus',
                    CZ: 'RepÃºblica Checa',
                    DE: 'Alemania',
                    DK: 'Dinamarca',
                    DO: 'RepÃºblica Dominicana',
                    DZ: 'Argelia',
                    EE: 'Estonia',
                    ES: 'EspaÃ±a',
                    FI: 'Finlandia',
                    FO: 'Islas Feroe',
                    FR: 'Francia',
                    GB: 'Reino Unido',
                    GE: 'Georgia',
                    GI: 'Gibraltar',
                    GL: 'Groenlandia',
                    GR: 'Grecia',
                    GT: 'Guatemala',
                    HR: 'Croacia',
                    HU: 'HungrÃ­a',
                    IE: 'Irlanda',
                    IL: 'Israel',
                    IR: 'Iran',
                    IS: 'Islandia',
                    IT: 'Italia',
                    JO: 'Jordania',
                    KW: 'Kuwait',
                    KZ: 'KazajistÃ¡n',
                    LB: 'LÃ­bano',
                    LI: 'Liechtenstein',
                    LT: 'Lituania',
                    LU: 'Luxemburgo',
                    LV: 'Letonia',
                    MC: 'MÃ³naco',
                    MD: 'Moldavia',
                    ME: 'Montenegro',
                    MG: 'Madagascar',
                    MK: 'Macedonia',
                    ML: 'MalÃ­',
                    MR: 'Mauritania',
                    MT: 'Malta',
                    MU: 'Mauricio',
                    MZ: 'Mozambique',
                    NL: 'PaÃ­ses Bajos',
                    NO: 'Noruega',
                    PK: 'PakistÃ¡n',
                    PL: 'Poland',
                    PS: 'Palestina',
                    PT: 'Portugal',
                    QA: 'Catar',
                    RO: 'Rumania',
                    RS: 'Serbia',
                    SA: 'Arabia Saudita',
                    SE: 'Suecia',
                    SI: 'Eslovenia',
                    SK: 'Eslovaquia',
                    SM: 'San Marino',
                    SN: 'Senegal',
                    TL: 'Timor Oriental',
                    TN: 'TÃºnez',
                    TR: 'TurquÃ­a',
                    VG: 'Islas VÃ­rgenes BritÃ¡nicas',
                    XK: 'RepÃºblica de Kosovo'
                }
            },
            id: {
                'default': 'Por favor ingrese un nÃºmero de identificaciÃ³n vÃ¡lido',
                country: 'Por favor ingrese un nÃºmero de identificaciÃ³n vÃ¡lido en %s',
                countries: {
                    BA: 'Bosnia Herzegovina',
                    BG: 'Bulgaria',
                    BR: 'Brasil',
                    CH: 'Suiza',
                    CL: 'Chile',
                    CN: 'China',
                    CZ: 'RepÃºblica Checa',
                    DK: 'Dinamarca',
                    EE: 'Estonia',
                    ES: 'EspaÃ±a',
                    FI: 'Finlandia',
                    HR: 'Croacia',
                    IE: 'Irlanda',
                    IS: 'Islandia',
                    LT: 'Lituania',
                    LV: 'Letonia',
                    ME: 'Montenegro',
                    MK: 'Macedonia',
                    NL: 'PaÃ­ses Bajos',
                    PL: 'Poland',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SE: 'Suecia',
                    SI: 'Eslovenia',
                    SK: 'Eslovaquia',
                    SM: 'San Marino',
                    TH: 'Tailandia',
                    TR: 'TurquÃ­a',
                    ZA: 'SudÃ¡frica'
                }
            },
            identical: {
                'default': 'Por favor ingrese el mismo valor'
            },
            imei: {
                'default': 'Por favor ingrese un nÃºmero IMEI vÃ¡lido'
            },
            imo: {
                'default': 'Por favor ingrese un nÃºmero IMO vÃ¡lido'
            },
            integer: {
                'default': 'Por favor ingrese un nÃºmero vÃ¡lido'
            },
            ip: {
                'default': 'Por favor ingrese una direcciÃ³n IP vÃ¡lida',
                ipv4: 'Por favor ingrese una direcciÃ³n IPv4 vÃ¡lida',
                ipv6: 'Por favor ingrese una direcciÃ³n IPv6 vÃ¡lida'
            },
            isbn: {
                'default': 'Por favor ingrese un nÃºmero ISBN vÃ¡lido'
            },
            isin: {
                'default': 'Por favor ingrese un nÃºmero ISIN vÃ¡lido'
            },
            ismn: {
                'default': 'Por favor ingrese un nÃºmero ISMN vÃ¡lido'
            },
            issn: {
                'default': 'Por favor ingrese un nÃºmero ISSN vÃ¡lido'
            },
            lessThan: {
                'default': 'Por favor ingrese un valor menor o igual a %s',
                notInclusive: 'Por favor ingrese un valor menor que %s'
            },
            mac: {
                'default': 'Por favor ingrese una direcciÃ³n MAC vÃ¡lida'
            },
            meid: {
                'default': 'Por favor ingrese un nÃºmero MEID vÃ¡lido'
            },
            notEmpty: {
                'default': 'Por favor ingrese un valor'
            },
            numeric: {
                'default': 'Por favor ingrese un nÃºmero decimal vÃ¡lido'
            },
            phone: {
                'default': 'Por favor ingrese un nÃºmero vÃ¡lido de telÃ©fono',
                country: 'Por favor ingrese un nÃºmero vÃ¡lido de telÃ©fono en %s',
                countries: {
                    AE: 'Emiratos Ãrabes Unidos',
                    BG: 'Bulgaria',
                    BR: 'Brasil',
                    CN: 'China',
                    CZ: 'RepÃºblica Checa',
                    DE: 'Alemania',
                    DK: 'Dinamarca',
                    ES: 'EspaÃ±a',
                    FR: 'Francia',
                    GB: 'Reino Unido',
                    IN: 'India',
                    MA: 'Marruecos',
                    NL: 'PaÃ­ses Bajos',
                    PK: 'PakistÃ¡n',
                    RO: 'Rumania',
                    RU: 'Rusa',
                    SK: 'Eslovaquia',
                    TH: 'Tailandia',
                    US: 'Estados Unidos',
                    VE: 'Venezuela'
                }
            },
            promise: {
                'default': 'Por favor ingrese un valor vÃ¡lido'
            },
            regexp: {
                'default': 'Por favor ingrese un valor que coincida con el patrÃ³n'
            },
            remote: {
                'default': 'Por favor ingrese un valor vÃ¡lido'
            },
            rtn: {
                'default': 'Por favor ingrese un nÃºmero RTN vÃ¡lido'
            },
            sedol: {
                'default': 'Por favor ingrese un nÃºmero SEDOL vÃ¡lido'
            },
            siren: {
                'default': 'Por favor ingrese un nÃºmero SIREN vÃ¡lido'
            },
            siret: {
                'default': 'Por favor ingrese un nÃºmero SIRET vÃ¡lido'
            },
            step: {
                'default': 'Por favor ingrese un paso vÃ¡lido de %s'
            },
            stringCase: {
                'default': 'Por favor ingrese sÃ³lo caracteres en minÃºscula',
                upper: 'Por favor ingrese sÃ³lo caracteres en mayÃºscula'
            },
            stringLength: {
                'default': 'Por favor ingrese un valor con una longitud vÃ¡lida',
                less: 'Por favor ingrese menos de %s caracteres',
                more: 'Por favor ingrese mÃ¡s de %s caracteres',
                between: 'Por favor ingrese un valor con una longitud entre %s y %s caracteres'
            },
            uri: {
                'default': 'Por favor ingresese una URI vÃ¡lida'
            },
            uuid: {
                'default': 'Por favor ingrese un nÃºmero UUID vÃ¡lido',
                version: 'Por favor ingrese una versiÃ³n UUID vÃ¡lida para %s'
            },
            vat: {
                'default': 'Por favor ingrese un nÃºmero VAT vÃ¡lido',
                country: 'Por favor ingrese un nÃºmero VAT vÃ¡lido en %s',
                countries: {
                    AT: 'Austria',
                    BE: 'BÃ©lgica',
                    BG: 'Bulgaria',
                    BR: 'Brasil',
                    CH: 'Suiza',
                    CY: 'Chipre',
                    CZ: 'RepÃºblica Checa',
                    DE: 'Alemania',
                    DK: 'Dinamarca',
                    EE: 'Estonia',
                    ES: 'EspaÃ±a',
                    FI: 'Finlandia',
                    FR: 'Francia',
                    GB: 'Reino Unido',
                    GR: 'Grecia',
                    EL: 'Grecia',
                    HU: 'HungrÃ­a',
                    HR: 'Croacia',
                    IE: 'Irlanda',
                    IS: 'Islandia',
                    IT: 'Italia',
                    LT: 'Lituania',
                    LU: 'Luxemburgo',
                    LV: 'Letonia',
                    MT: 'Malta',
                    NL: 'PaÃ­ses Bajos',
                    NO: 'Noruega',
                    PL: 'Polonia',
                    PT: 'Portugal',
                    RO: 'RumanÃ­a',
                    RU: 'Rusa',
                    RS: 'Serbia',
                    SE: 'Suecia',
                    SI: 'Eslovenia',
                    SK: 'Eslovaquia',
                    VE: 'Venezuela',
                    ZA: 'SudÃ¡frica'
                }
            },
            vin: {
                'default': 'Por favor ingrese un nÃºmero VIN vÃ¡lido'
            },
            zipCode: {
                'default': 'Por favor ingrese un cÃ³digo postal vÃ¡lido',
                country: 'Por favor ingrese un cÃ³digo postal vÃ¡lido en %s',
                countries: {
                    AT: 'Austria',
                    BG: 'Bulgaria',
                    BR: 'Brasil',
                    CA: 'CanadÃ¡',
                    CH: 'Suiza',
                    CZ: 'RepÃºblica Checa',
                    DE: 'Alemania',
                    DK: 'Dinamarca',
                    ES: 'EspaÃ±a',
                    FR: 'Francia',
                    GB: 'Reino Unido',
                    IE: 'Irlanda',
                    IN: 'India',
                    IT: 'Italia',
                    MA: 'Marruecos',
                    NL: 'PaÃ­ses Bajos',
                    PL: 'Poland',
                    PT: 'Portugal',
                    RO: 'RumanÃ­a',
                    RU: 'Rusia',
                    SE: 'Suecia',
                    SG: 'Singapur',
                    SK: 'Eslovaquia',
                    US: 'Estados Unidos'
                }
            }
        }
    });
}(jQuery));