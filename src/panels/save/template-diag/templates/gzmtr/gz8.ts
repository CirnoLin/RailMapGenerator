export default {
    svg_height: 300,
    svg_width: 1800,
    svg_dest_width: 1000,
    show_outer: true,
    padding: 2.300062293353778,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['guangzhou', 'gz8', '#008C95', '#fff'],
    direction: 'l',
    current_stn_idx: '6t9l',
    platform_num: '1',
    txt_bg_gap: 15,
    txt_flip: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['9nrj'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        l1mz: {
            parents: ['4e8p'],
            children: ['iwf6'],
            name: ['琶洲', 'Pazhou'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '27',
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['万胜围', 'Wanshengwei'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz4', '#00843D', '#fff', '4号线', 'Line 4']]],
            branch: { left: [], right: [] },
            num: '28',
        },
        '4e8p': {
            parents: ['i8pd'],
            children: ['l1mz'],
            name: ['新港东', 'Xingangdong'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '26',
        },
        i8pd: {
            parents: ['e3cn'],
            children: ['4e8p'],
            name: ['磨碟沙', 'Modiesha'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '25',
        },
        e3cn: {
            parents: ['rltg'],
            children: ['i8pd'],
            name: ['赤岗', 'Chigang'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '24',
        },
        rltg: {
            parents: ['qbz7'],
            children: ['e3cn'],
            name: ['客村', 'Kecun'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz3', '#ECA154', '#000', '3号线', 'Line 3']]],
            branch: { left: [], right: [] },
            num: '23',
        },
        qbz7: {
            parents: ['kmeu'],
            children: ['rltg'],
            name: ['鹭江', 'Lujiang'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '22',
        },
        kmeu: {
            parents: ['denz'],
            children: ['qbz7'],
            name: ['中大', 'Sun Yat-sen\\University'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '21',
        },
        denz: {
            parents: ['kuvx'],
            children: ['kmeu'],
            name: ['晓港', 'Xiaogang'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '20',
        },
        kuvx: {
            parents: ['lddl'],
            children: ['denz'],
            name: ['昌岗', 'Changgang'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz2', '#00629B', '#fff', '2号线', 'Line 2']]],
            branch: { left: [], right: [] },
            num: '19',
        },
        lddl: {
            parents: ['bp86'],
            children: ['kuvx'],
            name: ['宝岗大道', 'Baogang Dadao'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '18',
        },
        bp86: {
            parents: ['6t9l'],
            children: ['lddl'],
            name: ['沙园', 'Shayuan'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gfl', '#C4D600', '#fff', '广佛线', 'Guangfo Line']]],
            branch: { left: [], right: [] },
            num: '17',
        },
        '6t9l': {
            parents: ['5eff'],
            children: ['bp86'],
            name: ['凤凰新村', 'Fenghuang Xincun'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '16',
        },
        '5eff': {
            parents: ['788p'],
            children: ['6t9l'],
            name: ['同福西', 'Tongfuxi'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '15',
        },
        '788p': {
            parents: ['i92z'],
            children: ['5eff'],
            name: ['文化公园', 'Cultural Park'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz6', '#80225F', '#fff', '6号线', 'Line 6']]],
            branch: { left: [], right: [] },
            num: '14',
        },
        i92z: {
            parents: ['d7sq'],
            children: ['788p'],
            name: ['华林寺', 'Hualinsi\\Buddist Temple'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '13',
        },
        d7sq: {
            parents: ['0x3h'],
            children: ['i92z'],
            name: ['陈家祠', 'Chen Clan Academy'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz1', '#F3D03E', '#000', '1号线', 'Line 1']]],
            branch: { left: [], right: [] },
            num: '12',
        },
        '0x3h': {
            parents: ['yjqb'],
            children: ['d7sq'],
            name: ['彩虹桥', 'Caihongqiao'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '11',
        },
        yjqb: {
            parents: ['xbp3'],
            children: ['0x3h'],
            name: ['西村', 'Xicun'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz5', '#C5003E', '#fff', '5号线', 'Line 5']]],
            branch: { left: [], right: [] },
            num: '10',
        },
        xbp3: {
            parents: ['d0jg'],
            children: ['yjqb'],
            name: ['鹅掌坦', 'Ezhangtan'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '09',
        },
        d0jg: {
            parents: ['31cw'],
            children: ['xbp3'],
            name: ['同德', 'Tongde'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '08',
        },
        '31cw': {
            parents: ['dsaz'],
            children: ['d0jg'],
            name: ['上步', 'Shangbu'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '07',
        },
        dsaz: {
            parents: ['2tdp'],
            children: ['31cw'],
            name: ['聚龙', 'Julong'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '06',
        },
        '2tdp': {
            parents: ['uyzf'],
            children: ['dsaz'],
            name: ['石潭', 'Shitan'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '05',
        },
        uyzf: {
            parents: ['olyz'],
            children: ['2tdp'],
            name: ['小坪', 'Xiaoping'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '04',
        },
        olyz: {
            parents: ['77dn'],
            children: ['uyzf'],
            name: ['石井', 'Shijing'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '03',
        },
        '77dn': {
            parents: ['9nrj'],
            children: ['olyz'],
            name: ['亭岗', 'Tinggang'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '02',
        },
        '9nrj': {
            parents: ['linestart'],
            children: ['77dn'],
            name: ['滘心', 'Jiaoxin'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '01',
        },
    },
    line_name: ['8号线', 'Line 8'],
    dest_legacy: true,
    char_form: 'cn',
    psd_num: '20',
    line_num: '8',
    info_panel_type: 'panasonic',
};