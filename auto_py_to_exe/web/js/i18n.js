const translationMap = {
    ui: { // Static UI elements
        title: {
            scriptLocation: {
                en: 'Script Location',
                zh: '脚本位置',
                zh_tw: '腳本位置',
                ru: 'Расположение скрипта',
                de: 'Script Pfad',
                pt_br: 'Localização do Script',
            },
            oneFile: {
                en: 'Onefile',
                zh: '单文件',
                zh_tw: '單檔案',
                ru: 'Один файл',
                de: 'Eine Datei',
                pt_br: 'Arquivo Único',
            },
            consoleWindow: {
                en: 'Console Window',
                zh: '控制台窗口',
                zh_tw: '控制台視窗',
                ru: 'Консольное приложение',
                de: 'Konsolen Anwendung',
                pt_br: 'Janela do Console',
            },
            icon: {
                en: 'Icon',
                zh: '图标',
                zh_tw: '圖示',
                ru: 'Иконка',
                de: 'Icon',
                pt_br: 'Ícone',
            },
            additionalFiles: {
                en: 'Additional Files',
                zh: '附加文件',
                zh_tw: '附加檔案',
                ru: 'Дополнительные файлы',
                de: 'Dateien hinzufügen',
                pt_br: 'Arquivos Adicionais',
            },
            advanced: {
                en: 'Advanced',
                zh: '高级',
                zh_tw: '進階',
                ru: 'Расширенные',
                de: 'Erweitert',
                pt_br: 'Avançado',
            },
            settings: {
                en: 'Settings',
                zh: '设置',
                zh_tw: '設定',
                ru: 'Настройки',
                de: 'Einstellungen',
                pt_br: 'Configurações',
            },
            currentCommand: {
                en: 'Current Command',
                zh: '当前命令',
                zh_tw: '當前命令',
                ru: 'Текущая команда',
                de: 'Aktueller Befehl',
                pt_br: 'Comando Atual',
            },
            output: {
                en: 'Output',
                zh: '输出',
                zh_tw: '輸出',
                ru: 'Вывод',
                de: 'Ausgabe',
                pt_br: 'Saída',
            },
            specificOptions: {
                en: 'auto-py-to-exe Specific Options',
                zh: 'auto-py-to-exe 特定的选项',
                zh_tw: 'auto-py-to-exe 特定的選項',
                ru: 'Особые параметры auto-py-to-exe',
                de: 'auto-py-to-exe spezifische Optionen',
                pt_br: 'Opções Específicas auto-py-to-exe',
            },
            outputDirectory: {
                en: 'Output Directory',
                zh: '输出路径',
                zh_tw: '輸出路徑',
                ru: 'Папка Вывода',
                de: 'Ausgabeverzeichnis',
                pt_br: 'Diretório de Saída',
            },
            increaseRecursionLimit: {
                en: 'Increase Recursion Limit',
                zh: '增加递归限制',
                zh_tw: '增加遞歸限制',
                ru: 'Увеличить Лимит Рекурсии',
                de: 'Erhöhen der Rekursionsbegrenzung',
                pt_br: 'Limite de Recursividade',
            },
            manuallyProvideOptions: {
                en: 'Manually Provide Options',
                zh: '手动提供选项',
                zh_tw: '手動提供選項',
                ru: 'Вручную Указанные Параметры',
                de: 'Optionen manuell eingeben',
                pt_br: 'Opções Manuais',
            },
            manualArgumentInput: {
                en: 'Manual Argument Input',
                zh: '手动参数输入',
                zh_tw: '手動參數輸入',
                ru: 'Ручной Ввод Аргументов',
                de: 'Manuelle Argumenteingabe',
                pt_br: 'Argumentos de Entrada',
            },
            configuration: {
                en: 'Configuration',
                zh: '配置',
                zh_tw: '配置',
                ru: 'Конфигурация',
                de: 'Konfiguration',
                pt_br: 'Configuração',
            }
        },
        button: {
            browse: {
                en: 'Browse',
                zh: '浏览',
                zh_tw: '瀏覽',
                ru: 'Расположение',
                de: 'Durchsuchen',
                pt_br: 'Exibir',
            },
            oneDirectory: {
                en: 'One Directory',
                zh: '单目录',
                zh_tw: '單目錄',
                ru: 'Одна Папка',
                de: 'Ein Verzeichnis',
                pt_br: 'Um Diretório',
            },
            oneFile: {
                en: 'One File',
                zh: '单文件',
                zh_tw: '單檔案',
                ru: 'Один файл',
                de: 'Eine Datei',
                pt_br: 'Um Arquivo',
            },
            consoleBased: {
                en: 'Console Based',
                zh: '基于控制台的',
                zh_tw: '基於控制台',
                ru: 'Консольное Приложение',
                de: 'Befehlszeilenbasiert',
                pt_br: 'Baseado em Console',
            },
            windowBased: {
                en: 'Window Based (hide the console)',
                zh: '基于窗口的 (隐藏控制台)',
                zh_tw: '基於視窗 (隱藏控制台)',
                ru: 'Оконное Приложение (скрыть консоль)',
                de: 'Fensterbasiert (Befehlszeile ausblenden)',
                pt_br: 'Baseado em Janela (ocultar o console)',
            },
            addFiles: {
                en: 'Add Files',
                zh: '添加文件',
                zh_tw: '新增檔案',
                ru: 'Добавить Файлы',
                de: 'Dateien hinzufügen',
                pt_br: 'Adicionar Arquivos',
            },
            addFolder: {
                en: 'Add Folder',
                zh: '添加目录',
                zh_tw: '新增目錄',
                ru: 'Добавить Папку',
                de: 'Verzeichnis hinzufügen',
                pt_br: 'Adicionar Pasta',
            },
            addBlank: {
                en: 'Add Blank',
                zh: '添加空白',
                zh_tw: '新增空白',
                ru: 'Добавить шаблон',
                de: 'Leerzeichen hinzufügen',
                pt_br: 'Adicionar em Branco',
            },
            importConfig: {
                en: 'Import Config From JSON File',
                zh: '从JSON文件导入配置',
                zh_tw: '從 JSON 檔案導入配置',
                ru: 'Импортировать Конфигурацию из JSON Файла',
                de: 'Konfiguration aus JSON-Datei importieren',
                pt_br: 'Importar Config de Arquivo JSON',
            },
            exportConfig: {
                en: 'Export Config To JSON File',
                zh: '将配置导出到JSON文件',
                zh_tw: '將配置導出到 JSON 檔案',
                ru: 'Экспортировать Конфигурацию в JSON Файл',
                de: 'Konfiguration in JSON-Datei exportieren',
                pt_br: 'Exportar Config para Arquivo JSON',
            },
            convert: {
                en: 'Convert .py to .exe',
                zh: '将.PY转换为.EXE',
                zh_tw: '將.PY 轉換為 .EXE',
                ru: 'Конвертировать .py В .exe',
                de: 'Konvertiere .py in .exe',
                pt_br: 'Converter .py para .exe',
            },
            openOutputFolder: {
                en: 'Open Output Folder',
                zh: '打开输出目录',
                zh_tw: '打開輸出目錄',
                ru: 'Открыть Папку Вывода',
                de: 'Ausgabeverzeichnis öffnen',
                pt_br: 'Abrir Pasta de Saída',
            },
            enable: {
                en: 'Enable',
                zh: '开启',
                zh_tw: '開啟',
                ru: 'Включить',
                de: 'Aktivieren',
                pt_br: 'Habilitar',
            },
        },
        links: {
            helpPost: {
                en: 'Help Post',
                zh: '帮助帖子',
                zh_tw: '幫助文章',
                ru: 'Справка',
                de: 'Hilfe-Post',
                pt_br: 'Post Ajuda',
            }
        },
        placeholders: {
            pathToFile: {
                en: 'Path to file',
                zh: '文件路径',
                zh_tw: '檔案路徑',
                ru: 'Путь к файлу',
                de: 'Pfad zur Datei',
                pt_br: 'Caminhao para Arquivo',
            },
            icoFile: {
                en: '.ico file',
                zh: '图标路径',
                zh_tw: '圖示路徑',
                ru: '.ico файл',
                de: '.ico Datei',
                pt_br: 'Arquivo .ico',
            },
            directory: {
                en: 'DIRECTORY',
                zh: '目录',
                zh_tw: '目錄',
                ru: 'Директория',
                de: 'VERZEICHNIS',
                pt_br: 'DIRETÓRIO',
            },
            arguments: {
                en: 'ARGUMENTS',
                zh: '参数',
                zh_tw: '參數',
                ru: 'Аргументы',
                de: 'ARGUMENTE',
                pt_br: 'ARGUMENTOS',
            }
        },
        helpText: {
            outputDirectory: {
                en: 'The directory to put the output in. Will be created if it doesn\'t exist',
                zh: '用于放置输出的目录。如果不存在，将创建该目录',
                zh_tw: '用於放置輸出的目錄如果不存在，將自動創建該目錄',
                ru: 'Папка, в которую переместиться итоговое приложение. Будет создано при необходимости.',
                pt_br: 'O diretório para colocar a saída. Será criado se não existir',
            },
            increaseRecursionLimit: {
                en: 'Having this enabled will set the recursion limit to 5000 using sys.setrecursionlimit(5000).',
                zh: '启用此功能将使用sys.setrecursionlimit（5000）将递归限制设置为5000。',
                zh_tw: '啟用此功能將使用 sys.setrecursionlimit（5000）將遞歸限制設置為5000。',
                ru: 'Если включено установит лимит рекурсии равный 5000 с помощью sys.setrecursionlimit(5000).',
                pt_br: 'Ativar isso definirá o limite de recursão para 5000 usando sys.setrecursionlimit(5000)',
            },
            manualArgumentInput: {
                en: 'Inject raw text into the generated command.',
                zh: '将原始文本插入到生成的命令中。',
                zh_tw: '將原始文字插入到產生的命令中。',
                ru: 'Вставит текст в итоговую команду',
                pt_br: 'Injete texto bruto no comando gerado.',
            }
        },
        notes: {
            oneFileAdditionalFilesNote: {
                en: 'Be careful when using additional files with onefile mode;\n' +
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    'and update your code to work with PyInstaller.',
                zh: '使用单文件模式的附加文件时要小心;\n'+
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    '并更新您的代码以使用PyInstaller。',
                zh_tw: '使用單檔案模式的附加檔案時要小心;\n'+
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    '並更新您的代碼以使用 PyInstaller。',
                ru: 'Будьте внимательны при использовании дополнительных файлов в режиме одного файла;\n' +
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">Прочитайте Это</a>\n' +
                    'и обновите свой код для работы с PyInstaller.',
                pt_br: 'Tenha cuidado ao usar arquivos adicionais com o modo de arquivo único;\n' +
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    'and update your code to work with PyInstaller.',
            },
            rootDirectory: {
                en: 'If you want to put files in the root directory, put a period (.) in the destination.',
                zh: '如果要将文件放到根目录中，请在目标目录中输入句点(.)。',
                zh_tw: '如果要將檔案放到根目錄中，請在目標目錄中輸入句點(.)。',
                ru: 'Если вы хотите расположить файлы в главной директории, вставьте точку (.) в начале пути.',
                pt_br: 'Se você quiser colocar arquivos no diretório raiz, coloque um ponto (.) no destino.',
            },
            somethingWrongWithOutput: {
                en: 'Something wrong with your exe? Read\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    this post on how to fix common issues\n' +
                    '</a>\n' +
                    'for possible solutions.',
                zh: '你的exe有问题? 阅读' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    这篇文章是关于如何修复常见问题的\n' +
                    '</a>\n' +
                    '寻找可能的解决方案。',
                zh_tw: '您的 exe 有問題? 請閱讀' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    這篇文章是關於如何修復常見的問題\n' +
                    '</a>\n' +
                    '尋找可能的解決方案。',
                    ru: 'Что-то не так с вашим exe? Прочитайте\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    эту справку, с описанием большинства проблем\n' +
                    '</a>\n' +
                    'чтобы решить свою.',
                pt_br: 'Algo errado com seu exe? Read\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    este post fala sobre os problemas comuns\n' +
                    '</a>\n' +
                    ' e possíveis soluções.',
            }
        }
    },
    // Elements dynamically added to the DOM
    dynamic: {
        title: {
            // For the usage of constants.js:advancedSections
            generalOptions: {
                en: 'General Options',
                zh: '常规选项',
                zh_tw: '一般選項',
                ru: 'Основные Настройки',
                de: 'Allgemeine Optionen',
                pt_br: 'Opções Gerais',
            },
            whatToBundleWhereToSearch: {
                en: 'What to bundle, where to search',
                zh: '捆绑什么，搜索哪里',
                zh_tw: '怎樣捆綁，哪裡搜尋',
                ru: 'Что используется и где это искать',
                de: 'Was zusammenfassen, wo suchen',
                pt_br: 'O que agrupar, onde pesquisar',
            },
            howToGenerate: {
                en: 'How to generate',
                zh: '如何生成',
                zh_tw: '如何產生',
                ru: 'Настройки генератора',
                de: 'Wie generieren...?',
                pt_br: 'Como gerar',
            },
            windowsAndMacOsXSpecificOptions: {
                en: 'Windows And Mac Os X Specific Options',
                zh_tw: 'Windows 和 Mac Os X 特定選項',
                ru: 'Настройки для Windows и Mac Os X',
                de: 'Windows und Mac Os X spezifische Optionen',
                pt_br: 'Opções específicas Windows e Mac Os X',
            },
            windowsSpecificOptions: {
                en: 'Windows specific options',
                zh: 'Windows特定选项',
                zh_tw: 'Windows 特定選項',
                ru: 'Настройки для Windows',
                de: 'Windows spezifische Optionen',
                pt_br: 'Opções específicas Windows',
            },
            windowsSideBySideAssemblySearchingOptions: {
                en: 'Windows Side-by-side Assembly searching options (advanced)',
                zh: '窗口并排汇编搜索选项(高级)',
                zh_tw: '視窗並排彙編搜尋選項(進階)',
                ru: 'Параметры поиска параллельных сборок Windows (дополнительно)',
                de: 'Windows Side-by-side Suchoptionen (Erweitert)',
                pt_br: 'Opções de pesquisa dSide-by-side Assembly do Windows (avançado)',
            },
            macOsxSpecificOptions: {
                en: 'Mac OS X specific options',
                zh: 'Mac OS X特定选项',
                zh_tw: 'Mac OS X 特定選項',
                ru: 'Настройки для Mac OS X',
                de: 'Mac OS X spezifische Optionen',
                pt_br: 'Opções específicas Mac OS X',
            },
            rarelyUsedSpecialOptions: {
                en: 'Rarely used special options',
                zh: '很少使用的特殊选项',
                zh_tw: '很少使用的特殊選項',
                ru: 'Редко используемые дополнительные опции',
                de: 'Selten genuzte Spezialoptionen',
                pt_br: 'Opções especiais raramente usadas',
            },
            other: {
                en: 'Other',
                zh: '其他',
                zh_tw: '其它',
                ru: 'Другое',
                de: 'Andere',
                pt_br: 'Outros',
            },
        },
        button: {
            // For the usage of interface.js_createSubSectionInAdvanced
            browseForFile: {
                en: 'Browse for File',
                zh: '浏览文件',
                zh_tw: '瀏覽檔案',
                ru: 'Поиск файла',
                de: 'Datei suchen',
                pt_br: 'Procurar arquivo',
            },
            browseForFolder: {
                en: 'Browse for Folder',
                zh: '浏览文件夹',
                zh_tw: '瀏覽檔案夾',
                ru: 'Поиск Папки',
                de: 'Verzeichnis suchen',
                pt_br: 'Procurar Pasta',
            },
            enable: {
                en: 'Enable',
                zh: '开启',
                zh_tw: '開啟',
                ru: 'Включить',
                de: 'Aktivieren',
                pt_br: 'Habilitar',
            },
            disable: {
                en: 'Disable',
                zh: '关掉',
                zh_tw: '關閉',
                ru: 'Выключить',
                de: 'Deaktivieren',
                pt_br: 'Desabilitar',
            },
            converting: {
                en: 'Converting...',
                zh: '转换中······',
                zh_tw: '轉換中······',
                ru: 'Преобразование...',
                de: 'Konvertierung...',
                pt_br: 'Convertendo...',
            },
            clearOutput: {
                en: 'Clear Output',
                zh: '清除输出f',
                zh_tw: '清除輸出',
                ru: 'Отчистить Вывод',
                de: 'Ausgabe löschen',
                pt_br: 'Limpar Saída',
            },
        },
        modal: {
            configModalTitle: {
                en: 'Override current configuration?',
                zh: '覆盖当前配置？',
                zh_tw: '覆蓋當前配置？',
                ru: 'Перезаписать текущие настройки?',
                de: 'Aktuelle Konfiguration überschreiben?',
                pt_br: 'Substituir a configuração atual?',
            },
            configModalDescription: {
                en: 'All previously inserted values will be erased.',
                zh: '所有先前插入的值将被删除。',
                zh_tw: '所有先前插入的值將被刪除。',
                ru: 'Все ранее текущие значения будут удалены.',
                de: 'Alle zuvor eingegebenen Werte werden gelöscht.',
                pt_br: 'Todos os valores inseridos anteriormente serão apagados.',
            },
            configModalConfirmButton: {
                en: 'Confirm',
                zh: '确认',
                zh_tw: '確認',
                ru: 'Подтвердить',
                de: 'Bestätigen',
                pt_br: 'Confirma',
            },
            configModalCancelButton: {
                en: 'Cancel',
                zh: '取消',
                zh_tw: '取消',
                ru: 'Отмена',
                de: 'Abbrechen',
                pt_br: 'Cancela',
            }
        }
    },
    // Things like alerts
    nonDom: {
        alert: {
            noScriptsLocationProvided: {
                en: 'You have not provided your scripts location.\nPlease enter this at the top of the page.',
                zh: '您尚未提供脚本位置。\n请在页面顶部输入。',
                zh_tw: '您尚未提供腳本位置。\n請在頁面頂部輸入。',
                ru: 'Вы не указали расположение скрипта.\nУкажите его в самом верху страницы',
                de: 'Keinen Pfad zum Skript angegeben.\nBitte den Pfad zum Skript oben in der Seite eingeben.',
                pt_br: 'Você não forneceu o local dos seus scripts.\nPor favor, insira-o na parte superior da página.',
            },
            overwritePreviousOutput: {
                en: 'This action will overwrite a previous output in the output folder.\nContinue?',
                zh: '此操作将覆盖输出文件夹中以前的输出。\n是否继续？',
                zh_tw: '此操作將覆蓋輸出檔案夾中以前的輸出。\n是否繼續？',
                ru: 'Это действие перезапишет предыдущий вывод в папке вывода.\nПродолжить?',
                de: 'Diese Aktion wird vorige Ausgaben im Ausgabeverzeichnis überschreiben.\nWeitermachen?',
                pt_br: 'Esta ação substituirá uma saída anterior na pasta de saída.\nContinuar?',
            }
        },
    }
};

const translate = (language) => {
    if (language === undefined) {
        language = currentLanguage;
    }

    // Check that the language is supported
    language = _checkLanguageIsSupportedOrDefault(language);
    currentLanguage = language;

    // Update text inside elements
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(element => {
        const keys = element.dataset.i18n.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        // If there is a translation, translate otherwise use the default language
        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.innerHTML = translationBlock[language];
        } else {
            element.innerHTML = translationBlock[_defaultLanguage];
        }
    });

    // Update placeholders
    const placeholdersToTranslate = document.querySelectorAll("[data-i18n_placeholder]");
    placeholdersToTranslate.forEach(element => {
        const keys = element.dataset.i18n_placeholder.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.placeholder = translationBlock[language];
        } else {
            element.placeholder = translationBlock[_defaultLanguage];
        }
    });

    // Update titles
    const titleToTranslate = document.querySelectorAll("[data-i18n_title]");
    titleToTranslate.forEach(element => {
        const keys = element.dataset.i18n_title.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.title = translationBlock[language];
        } else {
            element.title = translationBlock[_defaultLanguage];
        }
    });
};

const _getLanguage = () => {
    const language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
          navigator.language || // All browsers
          navigator.userLanguage; // IE <= 10

    let shortLang = language;
    if (shortLang.indexOf('-') !== -1) {
        shortLang = shortLang.split('-')[0];
    }
    if (shortLang.indexOf('_') !== -1) {
        shortLang = shortLang.split('_')[0];
    }

    return shortLang;
};

const _checkLanguageIsSupportedOrDefault = (language) => {
    if (supportedLanguages.map(x => x.code).indexOf(language) !== -1) {
        return language;
    } else {
        return _defaultLanguage;
    }
};

const getTranslation = (path) => {
    const keys = path.split(".");
    const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

    if (translationBlock !== undefined && translationBlock[currentLanguage] !== undefined) {
        return translationBlock[currentLanguage];
    } else {
        return translationBlock[_defaultLanguage];
    }
};

const _defaultLanguage = 'en';
const supportedLanguages = [
    {
        name: 'English',
        code: 'en',
    },
    {
        name: 'Chinese Simplified (简体中文)',
        code: 'zh',
    },
    {
        name: 'Chinese Traditional (繁體中文)',
        code: 'zh_tw',
    },
    {
        name: 'Russian (Русский)',
        code: 'ru',
    },
    {
        name: 'German (Deutsch)',
        code: 'de',
    },
    {
        name: 'Brazilian Portuguese (Português Brasileiro)',
        code: 'pt_br'
    },
];
let currentLanguage = _checkLanguageIsSupportedOrDefault(_getLanguage()); // Keeps track of the current language