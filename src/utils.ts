import { RMGParam, Name, StationInfo } from './types';

export function putParams(instance: RMGParam) {
    localStorage.setItem('rmgParam', JSON.stringify(instance));
}

export function getParams() {
    return JSON.parse(localStorage.rmgParam) as RMGParam;
}

export function setParams(key: Extract<keyof RMGParam, string>, data: any) {
    let param = getParams();
    param[key] = data;
    putParams(param);
}

export function getTxtBoxDim(elem: SVGGraphicsElement, svg: string) {
    let svgNode = $('#' + svg)[0] as Element as SVGSVGElement;
    let bcr = elem.getBoundingClientRect();
    let pt = svgNode.createSVGPoint();
    let ctm = svgNode.getScreenCTM();
    pt.x = bcr.left;
    pt.y = bcr.top;
    let pos = pt.matrixTransform(ctm.inverse());
    return {x:pos.x, y:pos.y, width:bcr.width, height:bcr.height};
}

export function joinIntName(names: Name, dy1, dy2): [JQuery<HTMLElement>, number, number] {
    var [nameZH, nameEN] = names.map(txt => txt.split(/\\/g));
    var res = $('<text>').addClass('rmg-name__zh IntName').text(nameZH[0]);
    for (let i=1; i<nameZH.length; i++) {
        res = res.append(
            $('<tspan>', {'x':0, 'dy':dy1, 'dominant-baseline': 'central'}).text(nameZH[i])
        );
    }
    var btwGap = (nameZH.length == 1) ? 9 : 9;
    res = res.append(
        $('<tspan>', {
            'x':0, 'dy':btwGap, 'class': 'rmg-name__en IntName'
        }).text(nameEN[0])
    );
    for (let i=1; i<nameEN.length; i++) {
        res = res.append(
            $('<tspan>', {
                'x':0, 'dy':dy2, 'class': 'rmg-name__en IntName'
            }).text(nameEN[i])
        );
    }
    return [res, nameZH.length, nameEN.length];
}

export function getRandomId() {
    return Math.floor(Math.random() * Math.pow(36, 4)).toString(36).padStart(4, '0');
}

export function getNameFromId(stnId: string): Name {
    let numsZH = [
        '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', 
        '日', '月', '金', '木', '水', '火', '土', 
        '竹', '戈', '十', '大', '中', '一', '弓', 
        '人', '心', '手', '口', 
        '尸', '廿', '山', '女', '田', '難', '卜', '重'
    ];
    let numsEN = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 
        'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf',
        'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 
        'Oscar', 'Papa', 'Quebec', 'Romeo', 
        'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'
    ];
    return [
        stnId.split('').map(char => numsZH[parseInt(char, 36)]).join(''), 
        stnId.split('').map(char => numsEN[parseInt(char, 36)]).join(' ')
    ];
}



export function rgb2Hex(rgb: string) {
    let hex = rgb.match(/[\d]+/g)
        .map(dec => Number(dec).toString(16).padStart(2,'0'))
        .join('');
    switch (hex) {
        case '000000': return '#000';
        case 'ffffff': return '#fff';
        default: return '#' + hex;
    }
}

export function updateParam() {
    var param = getParams();

    // Version 0.10
    if (!('line_name' in param)) {
        param.line_name = ['路線名', 'Name of Line'];
    }
    if (!('dest_legacy' in param)) {
        param.dest_legacy = false;
    }

    // Version 0.11
    if (!('char_form' in param)) {
        param.char_form = (region => {switch (region) {
            case 'KR': return 'trad';
            case 'TC': return 'tw';
            case 'SC': return 'cn';
            case 'JP': return 'jp';
        }})(param.fontZH[0].split(' ').reverse()[0])
    }
    delete param.fontZH;
    delete param.fontEN;
    delete param.weightZH;
    delete param.weightEN;

    // Version 0.12
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        // if (['linestart', 'lineend'].includes(stnId)) {continue;}
        // if ('transfer' in stnInfo) {
        //     delete param.stn_list[stnId].interchange;
        //     switch (stnInfo.change_type) {
        //         case 'int2':
        //             param.stn_list[stnId].interchange = [[stnInfo.transfer[1]]];
        //             break;
        //         case 'int3_l':
        //         case 'int3_r':
        //             param.stn_list[stnId].interchange = [stnInfo.transfer.slice(1,3)];
        //             break;
        //         case 'osi11_pl':
        //         case 'osi11_pr':
        //         case 'osi11_ul':
        //         case 'osi11_ur':
        //             param.stn_list[stnId].interchange = [[], stnInfo.transfer.slice(0,2)];
        //             break;
        //         case 'osi12_pl':
        //         case 'osi12_pr':
        //         case 'osi12_ul':
        //         case 'osi12_ur':
        //             param.stn_list[stnId].interchange = [[], stnInfo.transfer];
        //             break;
        //     }
        // }
        // delete param.stn_list[stnId].transfer;
        
        if (!('branch' in stnInfo)) {
            param.stn_list[stnId].branch = { left:[], right:[] };
            if (stnInfo.children.length == 2) {
                param.stn_list[stnId].branch.right = ['through', stnInfo.children[1]];
            } else {
                param.stn_list[stnId].branch.right = [];
            }
            if (stnInfo.parents.length == 2) {
                param.stn_list[stnId].branch.left = ['through', stnInfo.parents[1]];
            } else {
                param.stn_list[stnId].branch.left = [];
            }
        }
    }

    // Version 1.2
    if (!('psd_num' in param)) {
        param.psd_num = 1;
    }
    if (!('line_num' in param)) {
        param.line_num = 1;
    }
    delete param.style;
    if ((<any>param.theme).length == 3) {
        (<any>param.theme).push('#fff');
    }
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (['linestart', 'lineend'].includes(stnId)) {continue;}
        if (!('num' in stnInfo)) {
            param.stn_list[stnId].num = '00';
        }
    }

    // Version 1.3
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if ('interchange' in stnInfo) {
            stnInfo.interchange.map(arr => {
                arr.map(intInfo => {
                    if (intInfo.length == 5) {
                        intInfo.splice(3,0,'#fff');
                    }
                });
            });
        }
    }

    // Version 1.4
    if (!('info_panel_type' in param)) {
        param.info_panel_type = 'panasonic';
    }

    // Version 1.5
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (stnInfo.change_type === 'osi22_end_p') {
            param.stn_list[stnId].change_type = 'osi22_pr';
        }
        if (stnInfo.change_type === 'osi22_end_u') {
            param.stn_list[stnId].change_type = 'osi22_ur';
        }
    }

   // Version 2.1
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (!('interchange' in stnInfo)) {
            param.stn_list[stnId].interchange = [[]];
        }
    }

    // Version 2.2
    if (param.info_panel_type === 'gz_1') {
        param.info_panel_type = 'gz28';
    }

    // Version 2.3
    if (param.info_panel_type === 'panasonic') {
        param.info_panel_type = 'gz28';
    }
    if (param.info_panel_type === 'gz_2') {
        param.info_panel_type = 'gzgf';
    }
    if (param.info_panel_type === 'gz_3') {
        param.info_panel_type = 'gz3';
    }
    if (!('direction_gz_x' in param)) {
        param.direction_gz_x = 50;
    }
    if (!('direction_gz_y' in param)) {
        param.direction_gz_y = 70;
    }

    // Version 2.6
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (!('transfer' in stnInfo)) {
            param.stn_list[stnId].transfer = {
                type: stnInfo.change_type.split('_')[0] as 'none' | 'int2' | 'int3' | 'osi11' | 'osi12' | 'osi22', 
                tick_direc: (stnInfo.change_type === 'none' || stnInfo.change_type === 'int2') ? 'r' : stnInfo.change_type.split('_')[1].split('').slice().reverse()[0] as 'l' | 'r', 
                paid_area: (stnInfo.change_type.indexOf('osi')!==-1) ? stnInfo.change_type.split('_')[1][0]==='p' : true, 
                osi_names: (stnInfo.change_type.indexOf('osi')!==-1) ? [stnInfo.interchange[1][0]] : [], 
                info: (stnInfo.interchange.length === 2) ? [stnInfo.interchange[0], stnInfo.interchange[1].slice(1)] : stnInfo.interchange
            }
        }
    }

    // Version 2.8
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (!('services' in stnInfo)) {
            param.stn_list[stnId].services = ['local'];
        }
    }

    // Version 2.15
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (!('usage' in stnInfo)) {
            param.stn_list[stnId].usage = '';
        }
    }

    // Version 3.0
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (!('facility' in stnInfo)) {
            param.stn_list[stnId].facility = stnInfo.usage;
        }
    }
    putParams(param);
}


const langFallback = (lang: string) => {
    switch (lang) {
        case 'en': return ['en'];
        case 'zh-Hans': return ['zh-Hans', 'zh', 'en'];
        case 'zh-HK': return ['zh-HK', 'zh-Hant', 'zh', 'en'];
        default: return [lang, 'en'];
    }
}

export const getTransText = (obj: {[index: string]: string}, lang: string) => {
    return obj[langFallback(lang).find(l => obj[l])];
}

export const getTransText2 = (obj: {[index: string]: string}, langs: string[]) => {
    return langs.reduce((acc, cur) => acc ? acc : (obj[cur] ? obj[cur] : acc), '');
}



/**
 * Format display style of station name as `[num: ]nameZH,nameEN`.
 */
export const formatStnName = (stnInfo: StationInfo) => {
    return `${
        window.urlParams.get('style')==='gzmtr' ? (stnInfo?.num || '-')+': ' : ''
    }${stnInfo?.name.join().replace('\\',' ')}`;
}