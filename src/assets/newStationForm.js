export default {
    rule: [
        {
            type: 'select',
            field: 'depid',
            title: '所属部门',
            value: '',
            props: {
                filterable: true,
                clearable: true
            },
            options: []
        },
        {
            type: 'input',
            title: '电站编号',
            field: 'stationcode',
            value: '',
            props: {
                'type': 'text',
                placeholder: '请输入电站编号'
            },
            validate: [
                { required: true, message: '请输入电站编号', trigger: 'blur' }
            ]
        },
        {
            type: 'input',
            title: '电站简称',
            field: 'stationname',
            value: '',
            props: {
                'type': 'text',
                placeholder: '请输入电站简称'
            },
            validate: [
                { required: true, message: '请输入电站简称', trigger: 'blur' }
            ]
        },
        {
            type: 'input',
            title: '电站全称',
            field: 'stationfullname',
            value: '',
            props: {
                'type': 'text',
                placeholder: '请输入电站全称'
            },
            validate: [
                { required: true, message: '请输入电站全称', trigger: 'blur' }
            ]
        },
        {
            type: 'select',
            field: 'stationClass',
            title: '电站分类',
            value: '',
            options: [
                { 'value': '01', 'label': '光伏电站' },
                { 'value': '02', 'label': '风电电站' },
                { 'value': '03', 'label': '电能站' },
                { 'value': '04', 'label': '火电' }
            ],
            validate: [
                { required: true, message: '请选择电站分类', trigger: 'blur' }
            ]
        },
        {
            type: 'select',
            field: 'stationType',
            title: '电站类型',
            value: '',
            props: {
                clearable: true
            },
            options: [
                { 'value': '01', 'label': '地面电站' },
                { 'value': '02', 'label': '分布式电站' },
                { 'value': '03', 'label': '用户电站' }
            ]
        },
        {
            type: 'select',
            field: 'managerid',
            title: '负责人',
            value: '',
            props: {
                filterable: true,
                clearable: true
            },
            options: []
        },
        {
            type: 'input',
            title: '总装机量(kW)',
            field: 'buildcapacity',
            value: '',
            props: {
                type: 'text',
                placeholder: '请输入总装机量(kW)'
            }
        },
        {
            type: 'DatePicker',
            title: '投产日期',
            field: 'productiondate',
            value: '',
            props: {
                type: 'date',
                format: 'yyyy-MM-dd',
                placeholder: '请选择投产日期',
                style: 'width: 100%;'
            }
        },
        {
            type: 'DatePicker',
            title: '停产日期',
            field: 'closedate',
            value: '',
            props: {
                type: 'date',
                format: 'yyyy-MM-dd',
                placeholder: '请选择停产日期',
                style: 'width: 100%;'
            }
        },
        {
            type: 'select',
            field: 'lineInType',
            title: '电站接入方式',
            value: '',
            props: {
                clearable: true
            },
            options: []
        },
        {
            type: 'input',
            title: '保险公司名称',
            field: 'insureName',
            value: '',
            props: {
                type: 'text',
                placeholder: '请输入保险公司名称'
            }
        },
        {
            type: 'input',
            title: '保险公司联系人',
            field: 'insureCont',
            value: '',
            props: {
                type: 'text',
                placeholder: '请输入保险公司联系人'
            }
        },
        {
            type: 'input',
            title: '保险公司联系电话',
            field: 'insureTel',
            value: '',
            props: {
                type: 'text',
                placeholder: '请输入保险公司联系电话'
            }
        },
        {
            type: 'select',
            field: 'status',
            title: '电站状态',
            value: '',
            props: {
                clearable: true
            },
            options: [
                { 'value': '00', 'label': '投产使用' },
                { 'value': '01', 'label': '在建' },
                { 'value': '02', 'label': '规划中' },
                { 'value': '03', 'label': '停用' }
            ]
        },
        {
            type: 'upload',
            field: 'picture0',
            title: '实景图',
            value: [
                'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
                'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'
            ],
            col: {
                span: 24
            },
            props: {
                // type: 'select',
                uploadType: 'image',
                action: '/PowerStation/update.htm',
                data: {

                },
                multiple: true,
                // eslint-disable-next-line no-useless-escape
                accept: 'image\/*',
                format: ['jpg', 'jpeg', 'png', 'gif'],
                limit: 3,
                'list-type': 'text',
                'auto-upload': false
            }
        },
        {
            type: 'select',
            field: 'provinceid',
            title: '省',
            value: '',
            props: {
                filterable: true
            },
            options: [],
            validate: [
                { required: true, message: '请输入电站编号', trigger: 'blur' }
            ],
            on: {
                change: `function (val) {
                    $f.setValue({ cityid: '' })
                    $f.updateRule('cityid', { options: [] })
                    $solwayApi.get($baseApi + '/BaseRegion/selectByTreeLevel.htm', {treeLevel: 2, parentId: val}).then(function (res) {
                        $f.updateRule('cityid', {
                            options: res.map(function (v) {
                                return {
                                    label: v.regionName,
                                    value: v.id
                                }
                            })
                        })
                    })
                }`
            }
        },
        {
            type: 'select',
            field: 'cityid',
            title: '市',
            value: '',
            props: {
                filterable: true
            },
            options: [],
            validate: [
                { required: true, message: '请输入电站编号', trigger: 'blur' }
            ],
            on: {
                change: `function (val) {
                    $f.setValue({ countyid: '' })
                    $f.updateRule('countyid', { options: [] })
                    $solwayApi.get($baseApi + '/BaseRegion/selectByTreeLevel.htm', {treeLevel: 3, parentId: val}).then(function (res) {
                        $f.updateRule('countyid', {
                            options: res.map(function (v) {
                                return {
                                    label: v.regionName,
                                    value: v.id
                                }
                            })
                        })
                    })
                }`
            }
        },
        {
            type: 'select',
            field: 'countyid',
            title: '区/县',
            value: '',
            props: {
                filterable: true
            },
            options: [],
            validate: [
                { required: true, message: '请输入电站编号', trigger: 'blur' }
            ],
            on: {
                change: `function (val) {
                    $f.setValue({ address: '' })

                    var province = $f.getRule('provinceid');
                    if (!province.value) return;
                    var provinceStr = province.options.find(function (v) { return v.value === province.value }).label;

                    var city = $f.getRule('cityid');
                    if (!city.value) return;
                    var cityStr = city.options.find(function (v) { return v.value === city.value }).label;

                    var county = $f.getRule('countyid');
                    if (!county.value) return;
                    var countyStr = county.options.find(function (v) { return v.value === county.value }).label;

                    var str = provinceStr + cityStr + countyStr;
                    $solwayApi.get($baseApi + '/GetLatAndLngByBaidu/getlatandlng.htm', {add: str}).then(function (res) {
                        $f.setValue({
                            longitude: res[0],
                            latitude: res[1]
                        })
                    })
                }`
            }
        },
        {
            type: 'input',
            title: '详细地址',
            field: 'address',
            value: '',
            props: {
                type: 'text'
            },
            validate: [
                { required: true, message: '请输入详细地址', trigger: 'blur' }
            ],
            on: {
                blur: `function (event) {
                    var province = $f.getRule('provinceid');
                    if (!province.value) return;
                    var provinceStr = province.options.find(function (v) { return v.value === province.value }).label;

                    var city = $f.getRule('cityid');
                    if (!city.value) return;
                    var cityStr = city.options.find(function (v) { return v.value === city.value }).label;

                    var county = $f.getRule('countyid');
                    if (!county.value) return;
                    var countyStr = county.options.find(function (v) { return v.value === county.value }).label;

                    var str = provinceStr + cityStr + countyStr + $f.getValue('address')
                    $solwayApi.get($baseApi + '/GetLatAndLngByBaidu/getlatandlng.htm', {add: str}).then(function (res) {
                        $f.setValue({
                            longitude: res[0],
                            latitude: res[1]
                        })
                    })
                }`
            }
        },
        {
            type: 'input',
            title: '经度',
            field: 'longitude',
            value: '',
            props: {
                placeholder: '总位数不超过11位',
                type: 'number'
            },
            validate: [
                { max: 11, message: '总位数不超过11位(含小数点)', trigger: 'blur' }
            ]
        },
        {
            type: 'input',
            title: '纬度',
            field: 'latitude',
            value: '',
            props: {
                type: 'number'
            },
            validate: [
                { max: 11, message: '总位数不超过11位(含小数点)', trigger: 'blur' }
            ]
        },
        {
            type: 'input',
            title: '联系电话',
            field: 'stationtel',
            value: '',
            props: {
                type: 'text'
            },
            validate: [
                { required: true, message: '请输入联系电话', trigger: 'blur' }
            ]
        },
        {
            type: 'input',
            title: '邮编',
            field: 'stationzip',
            value: '',
            props: {
                type: 'text'
            }
        }
    ],
    option: {
        onSubmit: `function (formData) {
            console.log('submit')
            $f.submitBtnProps({loading:true})
            setTimeout(function(){
                $f.submitBtnProps({loading:false})
                $f.destroy()
            }, 1000)
        }`,
        writeBack: `function () {
            // $f.setValue({
            //     insureTel: 55544463
            // })
        }`,
        mounted: `function ($f) {
            
            $f.updateRule('productiondate', {
                props: {
                    'picker-options': {
                        disabledDate: function (time) {
                            return time.getTime() > Date.now()
                        }
                    }
                }
            })
            $f.updateRule('closedate', {
                props: {
                    'picker-options': {
                        disabledDate: function (time) {
                            return time.getTime() > Date.now()
                        }
                    }
                }
            })
            $f.updateRule('picture0', {
                props: {
                    onSuccess: function (res, file) {

                    }
                }
            })
        }`,
        global: {
            '*': {
                col: {
                    span: 8
                }
            }
        },
        submitBtn: {
            col: {
                span: 4,
                offset: 20
            }
        }
    }
}
