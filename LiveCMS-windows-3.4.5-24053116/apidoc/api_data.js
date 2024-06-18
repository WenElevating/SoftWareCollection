define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/alarm/clear",
    "title": "清空报警",
    "group": "alarm",
    "name": "AlarmClear",
    "version": "0.0.0",
    "filename": "routers/alarm_api.go",
    "groupTitle": "设备报警",
    "groupDescription": "<p>调取前端设备报警</p>",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/alarm/info",
    "title": "查询单条报警信息",
    "group": "alarm",
    "name": "AlarmInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报警ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/alarm_api.go",
    "groupTitle": "设备报警",
    "groupDescription": "<p>调取前端设备报警</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelID",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "AlarmPriority",
            "description": "<p>报警级别(1-一级警情,2-二级警情,3-三级警情,4-四级警情)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Time",
            "description": "<p>报警时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ],
            "optional": false,
            "field": "AlarmMethod",
            "description": "<p>报警方式(1-电话报警,2-设备报警,3-短信报警,4-GPS报警,5-视频报警,6-设备故障报警,7-其他报警)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "AlarmType",
            "description": "<p>报警类型 <br><strong>报警方式为2时</strong>, 不携带 AlarmType 为默认的设备报警,携带 AlarmType 取值对应报警类型如下:1-视频丢失报警,2-设备防拆报警,3-存储设备磁盘满报警,4-设备高温报警,5-设备低温报警; <br><strong>报警方式为5时</strong>, 取值如下:1-人工视频报警,2-运动目标检测报警,3-遗留物检测报警,4-物体移除检测报警,5-绊线检测报警,6-入侵检测报警,7-逆行检测报警,8-徘徊检测报警,9-流量统计报警,10-密度检测报警,11-视频异常检测报警,12-快速移动报警; <br><strong>报警方式为6时</strong>, 取值如下:1-存储设备磁盘故障报警,2-存储设备风扇故障报警;</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "AlarmEventType",
            "description": "<p>入侵报警事件类型(1-进入区域,2-离开区域)</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "ExtInfo",
            "description": "<p>扩展信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RecordPath",
            "description": "<p>报警预案关联录像路径</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SnapPath",
            "description": "<p>报警预案关联快照路径</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/alarm/list",
    "title": "查询报警列表",
    "group": "alarm",
    "name": "AlarmList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "starttime",
            "description": "<p>开始时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endtime",
            "description": "<p>结束时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "priority",
            "description": "<p>报警级别(1-一级警情,2-二级警情,3-三级警情,4-四级警情)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ],
            "optional": true,
            "field": "method",
            "description": "<p>报警方式(1-电话报警,2-设备报警,3-短信报警,4-GPS报警,5-视频报警,6-设备故障报警,7-其他报警)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/alarm_api.go",
    "groupTitle": "设备报警",
    "groupDescription": "<p>调取前端设备报警</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AlarmPublishToRedis",
            "description": "<p>是否开启报警消息发布到 Redis</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "AlarmReserveDays",
            "description": "<p>记录最近天数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "AlarmCount",
            "description": "<p>报警总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "AlarmList",
            "description": "<p>报警列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "AlarmList.ID",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "AlarmList.DeviceID",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "AlarmList.ChannelID",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "AlarmList.AlarmPriority",
            "description": "<p>报警级别(1-一级警情,2-二级警情,3-三级警情,4-四级警情)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "AlarmList.Time",
            "description": "<p>报警时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ],
            "optional": false,
            "field": "AlarmList.AlarmMethod",
            "description": "<p>报警方式(1-电话报警,2-设备报警,3-短信报警,4-GPS报警,5-视频报警,6-设备故障报警,7-其他报警)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "AlarmList.AlarmType",
            "description": "<p>报警类型 <br><strong>报警方式为2时</strong>, 不携带 AlarmType 为默认的设备报警,携带 AlarmType 取值对应报警类型如下:1-视频丢失报警,2-设备防拆报警,3-存储设备磁盘满报警,4-设备高温报警,5-设备低温报警; <br><strong>报警方式为5时</strong>, 取值如下:1-人工视频报警,2-运动目标检测报警,3-遗留物检测报警,4-物体移除检测报警,5-绊线检测报警,6-入侵检测报警,7-逆行检测报警,8-徘徊检测报警,9-流量统计报警,10-密度检测报警,11-视频异常检测报警,12-快速移动报警; <br><strong>报警方式为6时</strong>, 取值如下:1-存储设备磁盘故障报警,2-存储设备风扇故障报警;</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "AlarmList.AlarmEventType",
            "description": "<p>入侵报警事件类型(1-进入区域,2-离开区域)</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "AlarmList.ExtInfo",
            "description": "<p>扩展信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "AlarmList.RecordPath",
            "description": "<p>报警预案关联录像路径</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "AlarmList.SnapPath",
            "description": "<p>报警预案关联快照路径</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "AlarmList.CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/alarm/remove",
    "title": "删除报警",
    "group": "alarm",
    "name": "AlarmRemove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报警ID, 多个以逗号间隔</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/alarm_api.go",
    "groupTitle": "设备报警",
    "groupDescription": "<p>调取前端设备报警</p>",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/black/list",
    "title": "黑名单列表",
    "group": "blacklist",
    "name": "BlackList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/black_api.go",
    "groupTitle": "黑名单",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "BlackCount",
            "description": "<p>黑名单总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "BlackList",
            "description": "<p>黑名单列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BlackList.Serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BlackList.UserAgent",
            "description": "<p>UA</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BlackList.RemoteIP",
            "description": "<p>IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "BlackList.RemotePort",
            "description": "<p>端口</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BlackList.Description",
            "description": "<p>描述信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BlackList.UpdatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BlackList.CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/black/remove",
    "title": "黑名单删除",
    "group": "blacklist",
    "name": "BlackRemove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/black_api.go",
    "groupTitle": "黑名单",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/black/save",
    "title": "黑名单新增|编辑",
    "group": "blacklist",
    "name": "BlackSave",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_agent",
            "description": "<p>UA，为空时表示不限接入UA</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remote_ip",
            "description": "<p>IP，为空时表示不限接入IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "remote_port",
            "description": "<p>端口，为空时表示不限接入端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>描述信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/black_api.go",
    "groupTitle": "黑名单",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/channellist",
    "title": "查询级联通道列表",
    "group": "cascade",
    "name": "CascadeChannelList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "device",
              "dir",
              "all"
            ],
            "optional": true,
            "field": "channel_type",
            "defaultValue": "all",
            "description": "<p>通道类型, device - 直接子设备, dir - 直接子目录, all - 所有</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "online",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "related",
            "defaultValue": "false",
            "description": "<p>是否只看已选共享</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelCount",
            "description": "<p>通道数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelRelateCount",
            "description": "<p>已共享通道数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ShareAllChannel",
            "description": "<p>是否共享所有通道</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "ChannelList",
            "description": "<p>通道列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CascadeID",
            "description": "<p>级联配置ID, 有值时, 表示该通道已共享</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.ID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.DeviceName",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.DeviceCustomName",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.DeviceOnline",
            "description": "<p>设备在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelList.Channel",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.Custom",
            "description": "<p>是否自定义通道</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CustomID",
            "description": "<p>通道自定义编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelList.SubCount",
            "description": "<p>子节点数, SubCount &gt; 0 表示该通道为子目录</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.SnapURL",
            "description": "<p>通道快照链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Manufacturer",
            "description": "<p>通道设备厂家</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Model",
            "description": "<p>通道设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Owner",
            "description": "<p>通道设备归属</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CivilCode",
            "description": "<p>行政区域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Address",
            "description": "<p>安装地址</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ChannelList.Parental",
            "description": "<p>当为通道设备时, 是否有通道子设备, 1-有,0-没有</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.ParentID",
            "description": "<p>直接上级编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ChannelList.Secrecy",
            "description": "<p>保密属性, 缺省为0, 0-不涉密, 1-涉密</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "ChannelList.RegisterWay",
            "description": "<p>注册方式, 缺省为1, 1-IETF RFC3261, 2-基于口令的双向认证, 3-基于数字证书的双向认证</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": false,
            "field": "ChannelList.Status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Altitude",
            "defaultValue": "0",
            "description": "<p>海拔高度, m</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Speed",
            "defaultValue": "0",
            "description": "<p>移动速度, km/h</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Direction",
            "defaultValue": "0",
            "description": "<p>与正北方的顺时针夹角,取值范围 0~360</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "ChannelList.PTZType",
            "defaultValue": "0",
            "description": "<p>云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "ChannelList.CustomPTZType",
            "defaultValue": "0",
            "description": "<p>自定义云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.BatteryLevel",
            "defaultValue": "0",
            "description": "<p>电量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.SignalLevel",
            "defaultValue": "0",
            "description": "<p>信号强度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.DownloadSpeed",
            "description": "<p>下载倍速范围</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.Ondemand",
            "defaultValue": "true",
            "description": "<p>按需直播配置</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.AudioEnable",
            "defaultValue": "false",
            "description": "<p>音频开关配置</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/info",
    "title": "查询单条级联配置信息",
    "group": "cascade",
    "name": "CascadeInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>级联配置名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Serial",
            "description": "<p>SIP服务ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Realm",
            "description": "<p>SIP服务域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Host",
            "description": "<p>SIP服务IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Port",
            "description": "<p>SIP服务端口</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LocalSerial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LocalHost",
            "description": "<p>本地IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LocalPort",
            "description": "<p>本地SIP端口</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>SIP认证用户名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>SIP认证密码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "KeepaliveInterval",
            "description": "<p>心跳周期(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RegisterInterval",
            "description": "<p>注册周期(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RegisterTimeout",
            "description": "<p>注册有效期(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LoadLimit",
            "description": "<p>流并发数限制, 0 表示不限制</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CatalogGroupSize",
            "description": "<p>通道目录分组大小, 即目录上报时一个UDP包里有几个ITEM</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "TCP",
              "UDP"
            ],
            "optional": true,
            "field": "CommandTransport",
            "defaultValue": "UDP",
            "description": "<p>信令传输</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "GB2312",
              "UTF-8"
            ],
            "optional": true,
            "field": "Charset",
            "defaultValue": "GB2312",
            "description": "<p>字符集</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Online",
            "description": "<p>是否在线</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Status",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AllowControl",
            "description": "<p>是否允许云台控制</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ShareAllChannel",
            "description": "<p>是否共享所有通道</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "StreamKeepalive",
            "description": "<p>是否开启RTCP流保活, 信令传输为 UDP 时有效</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "StreamReader",
            "description": "<p>是否强制H264编码</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "BindLocalIP",
            "description": "<p>是否绑定本地IP</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Enable",
            "description": "<p>是否启用</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/list",
    "title": "查询级联配置列表",
    "group": "cascade",
    "name": "CascadeList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "enable",
            "description": "<p>开启状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "online",
            "description": "<p>在线状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeCount",
            "description": "<p>级联总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "CasecadeList",
            "description": "<p>级联列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.ID",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.Name",
            "description": "<p>级联配置名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.Serial",
            "description": "<p>SIP服务ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.Realm",
            "description": "<p>SIP服务域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.Host",
            "description": "<p>SIP服务IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeList.Port",
            "description": "<p>SIP服务端口</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.LocalSerial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.LocalHost",
            "description": "<p>本地IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeList.LocalPort",
            "description": "<p>本地SIP端口</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.Username",
            "description": "<p>SIP认证用户名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CasecadeList.Password",
            "description": "<p>SIP认证密码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeList.KeepaliveInterval",
            "description": "<p>心跳周期(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeList.RegisterInterval",
            "description": "<p>注册周期(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeList.RegisterTimeout",
            "description": "<p>注册有效期(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeList.LoadLimit",
            "description": "<p>流并发数限制, 0 表示不限制</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CasecadeList.CatalogGroupSize",
            "description": "<p>通道目录分组大小, 即目录上报时一个UDP包里有几个ITEM</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "TCP",
              "UDP"
            ],
            "optional": true,
            "field": "CasecadeList.CommandTransport",
            "defaultValue": "UDP",
            "description": "<p>信令传输</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "GB2312",
              "UTF-8"
            ],
            "optional": true,
            "field": "CasecadeList.Charset",
            "defaultValue": "GB2312",
            "description": "<p>字符集</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CasecadeList.Online",
            "description": "<p>是否在线</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CasecadeList.Status",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "CasecadeList.Load",
            "description": "<p>负载</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CasecadeList.AllowControl",
            "description": "<p>是否允许云台控制</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CasecadeList.ShareAllChannel",
            "description": "<p>是否共享所有通道</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CasecadeList.StreamKeepalive",
            "description": "<p>是否开启RTCP流保活, 信令传输为 UDP 时有效</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CasecadeList.StreamReader",
            "description": "<p>是否强制H264编码</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CasecadeList.BindLocalIP",
            "description": "<p>是否绑定本地IP</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CasecadeList.Enable",
            "description": "<p>是否启用</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/pushcatalog",
    "title": "级联推送全部共享通道",
    "group": "cascade",
    "name": "CascadePushCatalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>上级国标服务 SIP ID, 该参数和 id 二选一传递即可</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/pushchannelcatalog",
    "title": "级联推送单条共享通道",
    "group": "cascade",
    "name": "CascadePushChannelCatalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>上级国标服务 SIP ID, 该参数和 id 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "event",
            "defaultValue": "UPDATE",
            "description": "<p>事件</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/remove",
    "title": "级联删除",
    "group": "cascade",
    "name": "CascadeRemove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/removechannels",
    "title": "设置级联移除共享通道",
    "group": "cascade",
    "name": "CascadeRemoveChannels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "channels[]",
            "description": "<p>通道列表,格式为 serial:code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/save",
    "title": "级联保存",
    "group": "cascade",
    "name": "CascadeSave",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ID",
            "description": "<p>级联配置ID, 为空时表示新增, 否则为修改</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "Enable",
            "defaultValue": "false",
            "description": "<p>是否启用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Serial",
            "description": "<p>SIP服务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Realm",
            "description": "<p>SIP服务域</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Host",
            "description": "<p>SIP服务IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Port",
            "description": "<p>SIP服务端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "LocalSerial",
            "description": "<p>设备国标编号, 为空时, 使用 livecms.ini &gt; [sip] &gt; serial 作为设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "LocalHost",
            "description": "<p>本地IP, 为空时, 使用 livecms.ini &gt; [sip] &gt; host 作为本地IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "LocalPort",
            "description": "<p>本地端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Username",
            "description": "<p>SIP认证用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Password",
            "description": "<p>SIP认证密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "KeepaliveInterval",
            "defaultValue": "60",
            "description": "<p>心跳周期(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "RegisterInterval",
            "defaultValue": "60",
            "description": "<p>注册周期(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "RegisterTimeout",
            "defaultValue": "3600",
            "description": "<p>注册有效期(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "LoadLimit",
            "defaultValue": "0",
            "description": "<p>流并发数限制, 0 表示不限制</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CatalogGroupSize",
            "defaultValue": "1",
            "description": "<p>通道目录分组大小, 即目录上报时一个UDP包里有几个ITEM</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "TCP",
              "UDP"
            ],
            "optional": true,
            "field": "CommandTransport",
            "defaultValue": "UDP",
            "description": "<p>信令传输</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "GB2312",
              "UTF-8"
            ],
            "optional": true,
            "field": "Charset",
            "defaultValue": "GB2312",
            "description": "<p>字符集</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "AllowControl",
            "defaultValue": "true",
            "description": "<p>是否允许云台控制</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "ShareRecord",
            "defaultValue": "true",
            "description": "<p>是否共享录像</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "ShareAllChannel",
            "defaultValue": "false",
            "description": "<p>是否共享所有通道</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "StreamKeepalive",
            "defaultValue": "false",
            "description": "<p>是否开启RTCP流保活, 信令传输为 UDP 时有效</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "StreamReader",
            "defaultValue": "false",
            "description": "<p>是否强制H264编码</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "BindLocalIP",
            "defaultValue": "false",
            "description": "<p>是否绑定本地IP</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>级联配置ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置"
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/savechannels",
    "title": "设置级联保存共享通道",
    "group": "cascade",
    "name": "CascadeSaveChannels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "channels[]",
            "description": "<p>通道列表,格式为 serial:code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/setenable",
    "title": "设置级联是否启用",
    "group": "cascade",
    "name": "CascadeSetEnable",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "enable",
            "defaultValue": "false",
            "description": "<p>是否启用级联</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/setshareallchannel",
    "title": "设置级联共享所有通道",
    "group": "cascade",
    "name": "CascadeSetShareAllChannel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "shareallchannel",
            "defaultValue": "false",
            "description": "<p>是否开启共享所有通道</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/sharenode",
    "title": "设置级联共享节点",
    "group": "cascade",
    "name": "CascadeShareNode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>节点设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>节点通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cascade_id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "share",
            "defaultValue": "true",
            "description": "<p>共享(true), 取消共享(false)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "subfetch",
            "defaultValue": "true",
            "description": "<p>是否包含子节点</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "uptrace",
            "defaultValue": "false",
            "description": "<p>是否包含父节点</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "devtree",
            "defaultValue": "true",
            "description": "<p>是否在设备树下共享父/子节点, true 表示在设备树下共享父/子节点, false 表示在分组树下共享父/子节点</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cascade/statuslog",
    "title": "查询级联状态记录",
    "group": "cascade",
    "name": "CascadeStatusLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "starttime",
            "description": "<p>开始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endtime",
            "description": "<p>结束时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogCount",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogReserveDays",
            "description": "<p>记录最近天数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "LogList",
            "description": "<p>记录列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.ID",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Serial",
            "description": "<p>级联配置ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Code",
            "description": "<p>上级国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Status",
            "description": "<p>状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Description",
            "description": "<p>描述</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.CreatedAt",
            "description": "<p>记录时间</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cascade_api.go",
    "groupTitle": "级联配置"
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/download/:serial/:code/:period",
    "title": "下载录像文件",
    "group": "cloudrecord",
    "name": "CloudRecordDownload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>录像开始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "120",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/querychannels",
    "title": "查询云端录像通道",
    "group": "cloudrecord",
    "name": "CloudRecordQueryChannels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "rows",
            "description": "<p>分页数据</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.custom_name",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.status",
            "description": "<p>通道在线状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.snap_url",
            "description": "<p>通道快照链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.device_custom_name",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "rows.device_online",
            "description": "<p>设备在线状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.updated_at",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "rows.created_at",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/querydaily",
    "title": "按日查询通道录像",
    "group": "cloudrecord",
    "name": "CloudRecordQueryDaily",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>日期, YYYYMMDD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "osd",
            "description": "<p>通道水印</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>当天的录像列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "list.startAt",
            "description": "<p>开始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "list.duration",
            "description": "<p>录像时长(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "list.hls",
            "description": "<p>录像播放链接</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "list.important",
            "description": "<p>重要标记</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像"
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/queryflags",
    "title": "按通道统计所有录像",
    "group": "cloudrecord",
    "name": "CloudRecordQueryFlags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "interrupt",
            "defaultValue": "12",
            "description": "<p>连续几个月没有录像停止统计</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "latest",
            "description": "<p>统计到最近几个月</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>统计超时时间(秒)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>月份, YYYYMM</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>标记当月每一天是否有录像, 0 - 没有录像, 1 - 有录像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例",
          "content": "{201803: \"0000000011000000000000000000000\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像"
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/querymonthly",
    "title": "按月查询通道录像",
    "group": "cloudrecord",
    "name": "CloudRecordQueryMonthly",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>月份, YYYYMM</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": "<p>标记当月每一天是否有录像, 0 - 没有录像, 1 - 有录像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功示例",
          "content": "\"0000000011000000000000000000000\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像"
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/remove",
    "title": "删除单条录像",
    "group": "cloudrecord",
    "name": "CloudRecordRemove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>录像开始时间, YYYYMMDDHHmmss</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/removechannel",
    "title": "删除通道所有录像",
    "group": "cloudrecord",
    "name": "CloudRecordRemoveChannel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/removedaily",
    "title": "按天删除通道录像",
    "group": "cloudrecord",
    "name": "CloudRecordRemoveDaily",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>日期, YYYYMMDD</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/setimportant",
    "title": "重要录像标记",
    "group": "cloudrecord",
    "name": "CloudRecordSetImportant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>录像开始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "important",
            "description": "<p>重要标记</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cloudrecord/video/:operate/:serial/:code/:starttime/:endtime/video.mp4",
    "title": "指定时间段录像播放及下载(mp4合成播放下载)",
    "group": "cloudrecord",
    "name": "CloudRecordVideoOperate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "play",
              "download"
            ],
            "optional": false,
            "field": "operate",
            "description": "<p>调用操作, play-播放, download-下载</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "starttime",
            "description": "<p>开始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endtime",
            "description": "<p>结束时间, YYYYMMDDHHmmss</p>"
          }
        ]
      }
    },
    "description": "<p>mp4播放示例</p> <p>http://localhost:10000/api/v1/cloudrecord/video/play/34020000001320000108/34020000001320000108/20190711172850/20190711174747/video.mp4</p> <p>mp4下载示例</p> <p>http://localhost:10000/api/v1/cloudrecord/video/download/34020000001320000108/34020000001320000108/20190711172850/20190711174747/video.mp4</p>",
    "version": "0.0.0",
    "filename": "routers/cloudrecord_api.go",
    "groupTitle": "云端服务器录像"
  },
  {
    "type": "get",
    "url": "/api/v1/control/alarmnotify",
    "title": "报警通知",
    "group": "control",
    "name": "ControlAlarmNotify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>报警级别, 1-一级警情,2-二级警情,3-三级警情,4-四级警情</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "method",
            "description": "<p>报警方式, 1-电话报警,2-设备报警,3-短信报警,4-GPS报警,5-视频报警,6-设备故障报警,7-其他报警</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>报警内容描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "type",
            "description": "<p>报警类型 <br><strong>报警方式为2时</strong>, 不携带 AlarmType 为默认的设备报警,携带 AlarmType 取值对应报警类型如下:1-视频丢失报警,2-设备防拆报警,3-存储设备磁盘满报警,4-设备高温报警,5-设备低温报警; <br><strong>报警方式为5时</strong>, 取值如下:1-人工视频报警,2-运动目标检测报警,3-遗留物检测报警,4-物体移除检测报警,5-绊线检测报警,6-入侵检测报警,7-逆行检测报警,8-徘徊检测报警,9-流量统计报警,10-密度检测报警,11-视频异常检测报警,12-快速移动报警; <br><strong>报警方式为6时</strong>, 取值如下:1-存储设备磁盘故障报警,2-存储设备风扇故障报警;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "eventtype",
            "description": "<p>报警类型为入侵检测报警时,可携带事件类型,1-进入区域,2-离开区域</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/alarmreset",
    "title": "报警复位",
    "group": "control",
    "name": "ControlAlarmReset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/deviceconfig",
    "title": "设备配置",
    "group": "control",
    "name": "ControlDeviceConfig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "BasicParam",
            "description": "<p>xml</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "SVACEncodeConfig",
            "description": "<p>xml</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "SVACDecodeConfig",
            "description": "<p>xml</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/devicesubscribe",
    "title": "设备订阅",
    "group": "control",
    "name": "ControlDeviceSubscribe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "catalog",
              "alarm",
              "position"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>订阅类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "expires",
            "defaultValue": "0",
            "description": "<p>订阅有效期(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/dragzoomin",
    "title": "拉框放大",
    "group": "control",
    "name": "ControlDragZoomIn",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>播放窗口长度像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>播放窗口宽度像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "midpointx",
            "description": "<p>拉框中心的横坐标像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "midpointy",
            "description": "<p>拉框中心的纵坐标像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lengthx",
            "description": "<p>拉框长度像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lengthy",
            "description": "<p>拉框宽度像素值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/dragzoomout",
    "title": "拉框缩小",
    "group": "control",
    "name": "ControlDragZoomOut",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>播放窗口长度像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>播放窗口宽度像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "midpointx",
            "description": "<p>拉框中心的横坐标像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "midpointy",
            "description": "<p>拉框中心的纵坐标像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lengthx",
            "description": "<p>拉框长度像素值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lengthy",
            "description": "<p>拉框宽度像素值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/fi",
    "title": "焦点光圈控制",
    "group": "control",
    "name": "ControlFI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "focusnear",
              "focusfar",
              "irisin",
              "irisout",
              "stop"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "speed",
            "defaultValue": "129",
            "description": "<p>速度(0~255)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/filllight",
    "title": "补光灯开关",
    "group": "control",
    "name": "ControlFillLight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "on",
              "off"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "index",
            "defaultValue": "0",
            "description": "<p>辅助开关编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ptzcmd",
            "description": "<p>个性化 PTZCmd</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/guard",
    "title": "布防撤防",
    "group": "control",
    "name": "ControlGuard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "setguard",
              "resetguard"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/homeposition",
    "title": "看守位控制",
    "group": "control",
    "name": "ControlHomePosition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "enabled",
            "defaultValue": "false",
            "description": "<p>使能开关</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resettime",
            "description": "<p>自动归位时间间隔(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "presetindex",
            "description": "<p>调用预置位编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/iframe",
    "title": "强制关键帧",
    "group": "control",
    "name": "ControlIFrame",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/navigate",
    "title": "巡航控制",
    "group": "control",
    "name": "ControlNavigate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "query",
              "add",
              "remove",
              "setspeed",
              "setstay",
              "start",
              "stop"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "groupid",
            "description": "<p>巡航组编号(1~255), 适用于 add, remove, setspeed, setstay, start</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "preset",
            "description": "<p>预置位编号(0~255), 适用于 add, remove, 当 command=remove 且 preset=0 时, 表示删除 groupid 对应的整条巡航</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "speed",
            "description": "<p>巡航速度(1~4095), 适用于 setspeed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "stay",
            "description": "<p>巡航停留时间(秒)(1~4095), 适用于 setstay</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SumNum",
            "description": "<p>列表项个数,当未配置巡航时取值为0</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "GroupList",
            "description": "<p>巡航组配置列表</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "GroupList.GroupID",
            "description": "<p>巡航组编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "GroupList.Presets",
            "description": "<p>巡航组内预置位表列, 逗号间隔</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "GroupList.Speed",
            "description": "<p>巡航速度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "GroupList.Stay",
            "description": "<p>巡航停留时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/ptz",
    "title": "云台控制",
    "group": "control",
    "name": "ControlPTZ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "left",
              "right",
              "up",
              "down",
              "upleft",
              "upright",
              "downleft",
              "downright",
              "zoomin",
              "zoomout",
              "stop"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "speed",
            "defaultValue": "129",
            "description": "<p>速度(0~255)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/preset",
    "title": "预置位控制",
    "group": "control",
    "name": "ControlPreset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "set",
              "goto",
              "remove"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "preset",
            "description": "<p>预置位编号(1~255)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>预置位名称, command=set 时有效</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/record",
    "title": "录像控制",
    "group": "control",
    "name": "ControlRecord",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "start",
              "stop"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/talk",
    "title": "语音喊话",
    "description": "<p>要求设备支持语音输出通道, 注意此接口有效率问题, 如果需要同时对多个设备喊话, 使用 websocket 接口 http://ip:port/api/v1/control/ws-talk/:serial/:code</p>",
    "group": "control",
    "name": "ControlTalk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "audio",
            "description": "<p>音频数据, Base64 编码, encodeURIComponent, 8000 采样率, 单通道</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "pcm",
              "g711a",
              "g711u"
            ],
            "optional": true,
            "field": "format",
            "defaultValue": "pcm",
            "description": "<p>音频格式</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/teleboot",
    "title": "设备远程启动(重启)",
    "group": "control",
    "name": "ControlTeleBoot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可, 对于直连设备, 建议此处和 serial 一致填设备编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "WEBSOCKET",
    "url": "/api/v1/control/ws-talk/:serial/:code",
    "title": "Websocket 语音喊话",
    "description": "<p>要求设备支持语音输出通道, websocket 客户端调用 send() 发送经过 Base64 编码的音频数据, 8000 采样率, 单通道</p>",
    "group": "control",
    "name": "ControlWSTalk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号, URL Path 参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道编号, URL Path 参数, 通过 /api/v1/device/channellist 获取的 ChannelList.ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "pcm",
              "g711a",
              "g711u"
            ],
            "optional": true,
            "field": "format",
            "defaultValue": "pcm",
            "description": "<p>音频格式, Query 参数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/control/wiper",
    "title": "雨刷开关",
    "group": "control",
    "name": "ControlWiper",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "on",
              "off"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>控制指令</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ptzcmd",
            "description": "<p>个性化 PTZCmd</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/control_api.go",
    "groupTitle": "设备控制",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/channelinfo",
    "title": "查询单条通道信息",
    "group": "device",
    "name": "DeviceChannelInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceName",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceCustomName",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Channel",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Block",
            "description": "<p>警区</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomBlock",
            "description": "<p>自定义警区</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Custom",
            "description": "<p>是否自定义通道</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SubCount",
            "description": "<p>子节点数, SubCount &gt; 0 表示该通道为子目录</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SnapURL",
            "description": "<p>通道快照链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Manufacturer",
            "description": "<p>通道设备厂家</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomManufacturer",
            "description": "<p>通道自定义设备厂家</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Model",
            "description": "<p>通道设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomModel",
            "description": "<p>通道自定义设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Owner",
            "description": "<p>通道设备归属</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CivilCode",
            "description": "<p>行政区域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomCivilCode",
            "description": "<p>自定义行政区域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>安装地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomAddress",
            "description": "<p>自定义安装地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Firmware",
            "description": "<p>固件版本</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomFirmware",
            "description": "<p>自定义固件版本</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SerialNumber",
            "description": "<p>设备序列号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomSerialNumber",
            "description": "<p>自定义设备序列号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "IPAddress",
            "description": "<p>设备/区域/系统IP地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomIPAddress",
            "description": "<p>自定义设备/区域/系统IP地址</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Port",
            "description": "<p>设备/区域/系统端口</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "CustomPort",
            "description": "<p>自定义设备/区域/系统端口</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "Parental",
            "description": "<p>当为通道设备时, 是否有通道子设备, 1-有,0-没有</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ParentID",
            "description": "<p>直接上级编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomParentID",
            "description": "<p>自定义直接上级编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "Secrecy",
            "description": "<p>保密属性, 缺省为0, 0-不涉密, 1-涉密</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "RegisterWay",
            "description": "<p>注册方式, 缺省为1, 1-IETF RFC3261, 2-基于口令的双向认证, 3-基于数字证书的双向认证</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": false,
            "field": "Status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomStatus",
            "description": "<p>自定义在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "CustomLongitude",
            "defaultValue": "0",
            "description": "<p>自定义经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "CustomLatitude",
            "defaultValue": "0",
            "description": "<p>自定义纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Altitude",
            "defaultValue": "0",
            "description": "<p>海拔高度, m</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Speed",
            "defaultValue": "0",
            "description": "<p>移动速度, km/h</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Direction",
            "defaultValue": "0",
            "description": "<p>与正北方的顺时针夹角,取值范围 0~360</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "PTZType",
            "defaultValue": "0",
            "description": "<p>云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "CustomPTZType",
            "defaultValue": "0",
            "description": "<p>自定义云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "BatteryLevel",
            "defaultValue": "0",
            "description": "<p>电量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "SignalLevel",
            "defaultValue": "0",
            "description": "<p>信号强度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DownloadSpeed",
            "description": "<p>下载倍速范围</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Ondemand",
            "defaultValue": "true",
            "description": "<p>按需直播配置</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AudioEnable",
            "defaultValue": "false",
            "description": "<p>音频开关配置</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CloudRecord",
            "defaultValue": "false",
            "description": "<p>云端录像开关配置</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "StreamID",
            "description": "<p>直播流ID, 有值表示正在直播</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "NumOutputs",
            "description": "<p>直播在线人数</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/channellist",
    "title": "查询设备通道列表",
    "group": "device",
    "name": "DeviceChannelList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>设备国标编号, 多条用逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道国标编号, 多条用逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "civilcode",
            "description": "<p>行政区号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "block",
            "description": "<p>警区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "device",
              "dir",
              "all"
            ],
            "optional": true,
            "field": "channel_type",
            "defaultValue": "all",
            "description": "<p>通道类型, device - 直接子设备, dir - 直接子目录, all - 所有</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dir_serial",
            "description": "<p>子目录编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始, 从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "online",
            "description": "<p>在线状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelCount",
            "description": "<p>通道总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "ChannelList",
            "description": "<p>通道列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.ID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.DeviceName",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.DeviceCustomName",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.DeviceOnline",
            "description": "<p>设备在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelList.Channel",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Block",
            "description": "<p>警区</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomBlock",
            "description": "<p>自定义警区</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.Custom",
            "description": "<p>是否自定义通道</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomID",
            "description": "<p>自定义通道编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelList.SubCount",
            "description": "<p>子节点数, SubCount &gt; 0 表示该通道为子目录</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.SnapURL",
            "description": "<p>通道快照链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Manufacturer",
            "description": "<p>通道设备厂家</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomManufacturer",
            "description": "<p>通道自定义设备厂家</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Model",
            "description": "<p>通道设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomModel",
            "description": "<p>通道自定义设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Owner",
            "description": "<p>通道设备归属</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CivilCode",
            "description": "<p>行政区域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomCivilCode",
            "description": "<p>自定义行政区域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Address",
            "description": "<p>安装地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomAddress",
            "description": "<p>自定义安装地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.Firmware",
            "description": "<p>固件版本</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomFirmware",
            "description": "<p>自定义固件版本</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.SerialNumber",
            "description": "<p>设备序列号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomSerialNumber",
            "description": "<p>自定义设备序列号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.IPAddress",
            "description": "<p>设备/区域/系统IP地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomIPAddress",
            "description": "<p>自定义设备/区域/系统IP地址</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Port",
            "description": "<p>设备/区域/系统端口</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.CustomPort",
            "description": "<p>自定义设备/区域/系统端口</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ChannelList.Parental",
            "description": "<p>当为通道设备时, 是否有通道子设备, 1-有,0-没有</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.ParentID",
            "description": "<p>直接上级编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomParentID",
            "description": "<p>自定义直接上级编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ChannelList.Secrecy",
            "description": "<p>保密属性, 缺省为0, 0-不涉密, 1-涉密</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "ChannelList.RegisterWay",
            "description": "<p>注册方式, 缺省为1, 1-IETF RFC3261, 2-基于口令的双向认证, 3-基于数字证书的双向认证</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": false,
            "field": "ChannelList.Status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.CustomStatus",
            "description": "<p>自定义在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.CustomLongitude",
            "defaultValue": "0",
            "description": "<p>自定义经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.CustomLatitude",
            "defaultValue": "0",
            "description": "<p>自定义纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Altitude",
            "defaultValue": "0",
            "description": "<p>海拔高度, m</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Speed",
            "defaultValue": "0",
            "description": "<p>移动速度, km/h</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Direction",
            "defaultValue": "0",
            "description": "<p>与正北方的顺时针夹角,取值范围 0~360</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "ChannelList.PTZType",
            "defaultValue": "0",
            "description": "<p>云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "ChannelList.CustomPTZType",
            "defaultValue": "0",
            "description": "<p>自定义云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.BatteryLevel",
            "defaultValue": "0",
            "description": "<p>电量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.SignalLevel",
            "defaultValue": "0",
            "description": "<p>信号强度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.DownloadSpeed",
            "description": "<p>下载倍速范围</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.Ondemand",
            "defaultValue": "true",
            "description": "<p>按需直播配置</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.AudioEnable",
            "defaultValue": "false",
            "description": "<p>音频开关配置</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.CloudRecord",
            "defaultValue": "false",
            "description": "<p>云端录像开关配置</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.StreamID",
            "description": "<p>直播流ID, 有值表示正在直播</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.NumOutputs",
            "description": "<p>直播在线人数</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/channelsnap",
    "title": "通道快照",
    "group": "device",
    "name": "DeviceChannelSnap",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "now",
              "YYYYMMDDHHmmss"
            ],
            "optional": true,
            "field": "stime",
            "description": "<p>快照时间, 从录像截取指定时间的历史快照, now 表示取实时快照, 即抓图</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "check_outputs",
            "defaultValue": "true",
            "description": "<p>stime 快照有效, 是否在抓完快照后检查没有输出则停流</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "description": "<p>stime 快照超时时间(秒), 默认使用 ini &gt; sip &gt; ack_timeout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "jpeg",
              "png"
            ],
            "optional": true,
            "field": "format",
            "description": "<p>stime 快照格式</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "w",
            "defaultValue": "960",
            "description": "<p>stime 快照宽, -1 取原视频宽</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "h",
            "defaultValue": "540",
            "description": "<p>stime 快照高, -1 取原视频高</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK\nChannel-Snap-Time: yyyy-MM-DD HH:mm:ss\nimage/jpeg 格式, http body 为图片数据",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息"
  },
  {
    "type": "get",
    "url": "/api/v1/device/channeltree",
    "title": "查询设备通道树",
    "group": "device",
    "name": "DeviceChannelTree",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>设备编号, 传空值时, 加载顶级设备</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pcode",
            "description": "<p>父级国标通道编号, 传空值时, 加载顶级通道</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "subfetch",
            "defaultValue": "false",
            "description": "<p>是否抓取子节点, 默认 false 即懒加载</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>分页开始, 从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "500",
            "description": "<p>加载子节点数目上限, 0 表示不限制</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_tree_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "NodeList",
            "description": "<p>树节点列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.id",
            "description": "<p>节点id, 格式: 设备国标编号 + &quot;:&quot; + 通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.name",
            "description": "<p>节点名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "NodeList.custom",
            "description": "<p>是否自定义节点</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.customID",
            "description": "<p>节点自定义编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.customName",
            "description": "<p>节点自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "NodeList.code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": false,
            "field": "NodeList.status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "NodeList.ptzType",
            "defaultValue": "0",
            "description": "<p>云台控制类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "NodeList.longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "NodeList.latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": true,
            "field": "NodeList.parental",
            "description": "<p>是否父节点</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "NodeList.manufacturer",
            "description": "<p>厂家</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NodeList.subCount",
            "description": "<p>子节点数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NodeList.subCountDevice",
            "description": "<p>子设备数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NodeList.onlineSubCount",
            "description": "<p>在线子节点数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": true,
            "field": "NodeList.children",
            "description": "<p>子节点列表, 查询参数 subfetch = true 时有值</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/fetchcatalog",
    "title": "获取下级通道列表",
    "group": "device",
    "name": "DeviceFetchCatalog",
    "description": "<p>主动发起通道列表更新</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>子目录通道编号，用于局部更新</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelCount",
            "description": "<p>通道数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "ChannelList",
            "description": "<p>通道列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.DeviceID",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Manufacturer",
            "description": "<p>设备厂家</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Model",
            "description": "<p>设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Owner",
            "description": "<p>设备归属</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CivilCode",
            "description": "<p>行政区域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Block",
            "description": "<p>警区</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Address",
            "description": "<p>安装地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Parental",
            "description": "<p>当为设备时, 是否有子设备, 1-有,0-没有</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.ParentID",
            "description": "<p>父设备/区域/系统ID</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ChannelList.Secrecy",
            "description": "<p>保密属性, 缺省为0, 0-不涉密, 1-涉密</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.RegisterWay",
            "description": "<p>注册方式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": false,
            "field": "ChannelList.Status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.IPAddress",
            "description": "<p>设备/区域/系统IP地址</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Port",
            "description": "<p>设备/区域/系统端口</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.Firmware",
            "description": "<p>固件版本</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.SerialNumber",
            "description": "<p>设备序列号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "ChannelList.PTZType",
            "defaultValue": "0",
            "description": "<p>云台控制类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.BatteryLevel",
            "defaultValue": "0",
            "description": "<p>电量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.SignalLevel",
            "defaultValue": "0",
            "description": "<p>信号强度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.DownloadSpeed",
            "description": "<p>下载倍速范围</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/fetchconfig",
    "title": "获取下级通道配置",
    "group": "device",
    "name": "DeviceFetchConfig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "BasicParam",
              "VideoParamOpt",
              "SVACEncodeConfig",
              "SVACDecodeConfig"
            ],
            "optional": false,
            "field": "config_type",
            "description": "<p>配置类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "update",
            "defaultValue": "false",
            "description": "<p>是否依据返回结果来更新本域设备信息(名称、位置坐标), config_type=BasicParam 时有效</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "OK",
              "ERROR"
            ],
            "optional": false,
            "field": "Result",
            "description": "<p>查询结果</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "BasicParam",
            "description": "<p>基本参数</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BasicParam.Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "BasicParam.Expiration",
            "description": "<p>注册过期时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "BasicParam.HeartBeatInterval",
            "description": "<p>心跳间隔时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "BasicParam.HeartBeatCount",
            "description": "<p>心跳超时次数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": true,
            "field": "BasicParam.PositionCapability",
            "defaultValue": "0",
            "description": "<p>定位功能支持情况, 0-不支持,1-支持GPS,2-支持北斗(可选,默认0)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "BasicParam.Longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "BasicParam.Latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "VideoParamOpt",
            "description": "<p>视频参数范围</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "VideoParamOpt.DownloadSpeed",
            "description": "<p>下载倍速范围</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "VideoParamOpt.Resolution",
            "description": "<p>摄像机支持的分辨率</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "SVACEncodeConfig",
            "description": "<p>SVAC编码配置</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "SVACEncodeConfig.ROIParam",
            "description": "<p>感兴趣区域参数</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "SVACEncodeConfig.SVCParam",
            "description": "<p>SVC参数</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "SVACEncodeConfig.SurveillanceParam",
            "description": "<p>监控专用信息参数</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "SVACEncodeConfig.AudioParam",
            "description": "<p>音频参数</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "SVACDecodeConfig",
            "description": "<p>SVAC解码配置</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "SVACDecodeConfig.SVCParam",
            "description": "<p>SVC参数</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "SVACDecodeConfig.SurveillanceParam",
            "description": "<p>监控专用信息参数</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/fetchinfo",
    "title": "获取下级设备信息",
    "group": "device",
    "name": "DeviceFetchInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "update",
            "defaultValue": "false",
            "description": "<p>是否依据返回结果来更新本域设备信息(名称、位置坐标、在线状态)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceName",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "OK",
              "ERROR"
            ],
            "optional": false,
            "field": "Result",
            "description": "<p>查询结果</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Manufacturer",
            "description": "<p>设备生产商</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Model",
            "description": "<p>设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Firmware",
            "description": "<p>设备固件版本</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Channel",
            "description": "<p>视频输入通道数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "BatteryLevel",
            "defaultValue": "0",
            "description": "<p>电量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "SignalLevel",
            "defaultValue": "0",
            "description": "<p>信号强度</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/fetchpreset",
    "title": "获取下级通道预置位",
    "group": "device",
    "name": "DeviceFetchPreset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "fill",
            "defaultValue": "true",
            "description": "<p>是否填充空置预置位，当下级返回预置位，但不够255个时，自动填充空置预置位到255个</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "OK",
              "ERROR"
            ],
            "optional": false,
            "field": "Result",
            "description": "<p>查询结果</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SumNum",
            "description": "<p>列表项个数,当未配置预置位时取值为0</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "PresetItemList",
            "description": "<p>预置位配置列表项</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "PresetItemList.PresetID",
            "description": "<p>预置位编码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "PresetItemList.PresetName",
            "description": "<p>预置位名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "PresetItemList.PresetEnable",
            "description": "<p>预置位状态</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/fetchstatus",
    "title": "获取下级通道状态",
    "group": "device",
    "name": "DeviceFetchStatus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "update",
            "defaultValue": "false",
            "description": "<p>是否依据返回结果来更新本域通道的在线状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceName",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "OK",
              "ERROR"
            ],
            "optional": false,
            "field": "Result",
            "description": "<p>查询结果</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ONLINE",
              "OFFLINE"
            ],
            "optional": false,
            "field": "Online",
            "description": "<p>是否在线</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "OK",
              "ERROR"
            ],
            "optional": false,
            "field": "Status",
            "description": "<p>是否正常工作</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Reason",
            "description": "<p>不正常工作原因</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": true,
            "field": "Encode",
            "description": "<p>是否编码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": true,
            "field": "Record",
            "description": "<p>是否录像</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceTime",
            "description": "<p>设备时间, YYYY-MM-DDTHH:mm:ss</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/getchannelnavigate",
    "title": "查询通道巡航列表",
    "group": "device",
    "name": "DeviceGetChannelNavigate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SumNum",
            "description": "<p>列表项个数,当未配置巡航时取值为0</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "GroupList",
            "description": "<p>巡航组配置列表</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "GroupList.GroupID",
            "description": "<p>巡航组编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "GroupList.Presets",
            "description": "<p>巡航组内预置位表列, 逗号间隔</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "GroupList.Speed",
            "description": "<p>巡航速度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "GroupList.Stay",
            "description": "<p>巡航停留时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/grouptree",
    "title": "查询设备分组树",
    "group": "device",
    "name": "DeviceGroupTree",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>设备编号, 传空值时, 加载本域节点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pcode",
            "description": "<p>父级分组编号, 传空值时, 加载顶级分组</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "subfetch",
            "defaultValue": "false",
            "description": "<p>是否抓取子节点, 默认 false 即懒加载</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>分页开始, 从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "500",
            "description": "<p>加载子节点数目上限, 0 表示不限制</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_tree_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "NodeList",
            "description": "<p>树节点列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.id",
            "description": "<p>节点id, 格式: 设备国标编号 + &quot;:&quot; + 通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.name",
            "description": "<p>节点名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "NodeList.custom",
            "description": "<p>是否自定义节点</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.customID",
            "description": "<p>节点自定义编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.customName",
            "description": "<p>节点自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "NodeList.serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "NodeList.code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": false,
            "field": "NodeList.status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "NodeList.ptzType",
            "defaultValue": "0",
            "description": "<p>云台控制类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "NodeList.longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "NodeList.latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": true,
            "field": "NodeList.parental",
            "description": "<p>是否父节点</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "NodeList.manufacturer",
            "description": "<p>厂家</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NodeList.subCount",
            "description": "<p>子节点数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NodeList.subCountDevice",
            "description": "<p>子设备数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NodeList.onlineSubCount",
            "description": "<p>在线子节点数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": true,
            "field": "NodeList.children",
            "description": "<p>子节点列表, 查询参数 subfetch = true 时有值</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/info",
    "title": "查询单条设备信息",
    "group": "device",
    "name": "DeviceInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CustomName",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>设备类型,固定为国标设备&quot;GB&quot;</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelCount",
            "description": "<p>通道数</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RecvStreamIP",
            "description": "<p>针对该设备的收流IP, 为空时默认使用 livesms.ini &gt; sip &gt; host</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ContactIP",
            "description": "<p>针对该设备的信令联络IP, 为空时默认使用 livecms.ini &gt; sip &gt; host</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DropChannelType",
            "description": "<p>过滤通道类型, 多个用逗号分隔</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SMSID",
            "description": "<p>指定到 SMS ID, 为空时, 自动选择负载最小的 SMS</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SMSGroupID",
            "description": "<p>指定到 SMS 分组</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "CatalogInterval",
            "defaultValue": "3600",
            "description": "<p>通道目录抓取周期(秒), 0 表示后台不周期抓取目录</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "SubscribeInterval",
            "defaultValue": "0",
            "description": "<p>订阅周期(秒), 0 表示后台不周期订阅</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CatalogSubscribe",
            "description": "<p>目录订阅是否开启</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AlarmSubscribe",
            "description": "<p>报警订阅是否开启</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "PositionSubscribe",
            "description": "<p>位置订阅是否开启</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Online",
            "description": "<p>是否在线</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Password",
            "description": "<p>接入密码, 为空时默认使用统一接入密码 livecms.ini &gt; sip &gt; device_password</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "RecordCenter",
            "description": "<p>设备录像是否进行中心检索</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "RecordIndistinct",
            "description": "<p>设备录像是否模糊查询</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CivilCodeFirst",
            "description": "<p>目录结构是否行政区域优先</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "KeepOriginalTree",
            "description": "<p>目录结构是否保持原样</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "CommandTransport",
            "description": "<p>信令传输模式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "MediaTransport",
            "description": "<p>流传输模式(TCP/UDP)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "passive",
              "active"
            ],
            "optional": false,
            "field": "MediaTransportMode",
            "description": "<p>流传输模式(主动/被动)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RemoteIP",
            "description": "<p>出口IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RemotePort",
            "description": "<p>端口</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LastRegisterAt",
            "description": "<p>最近注册</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LastKeepaliveAt",
            "description": "<p>最近心跳</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UpdatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/list",
    "title": "查询设备列表",
    "group": "device",
    "name": "DeviceList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "online",
            "description": "<p>在线状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "DeviceCount",
            "description": "<p>设备总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "DeviceList",
            "description": "<p>设备列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.ID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.Name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceList.CustomName",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.Type",
            "description": "<p>设备类型,固定为国标设备&quot;GB&quot;</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "DeviceList.ChannelCount",
            "description": "<p>通道数</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceList.RecvStreamIP",
            "description": "<p>针对该设备的收流IP, 为空时默认使用 sms.ini sip host</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceList.ContactIP",
            "description": "<p>针对该设备的信令联络IP, 为空时默认使用 livecms.ini &gt; sip &gt; host</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceList.DropChannelType",
            "description": "<p>过滤通道类型, 多个用逗号分隔</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceList.SMSID",
            "description": "<p>指定到 SMS ID, 为空时, 自动选择负载最小的 SMS</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "DeviceList.SMSGroupID",
            "description": "<p>指定到 SMS 分组</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "DeviceList.CatalogInterval",
            "defaultValue": "3600",
            "description": "<p>通道目录抓取周期(秒), 0 表示后台不周期抓取目录</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "DeviceList.SubscribeInterval",
            "defaultValue": "0",
            "description": "<p>订阅周期(秒), 0 表示后台不周期订阅</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.CatalogSubscribe",
            "description": "<p>目录订阅是否开启</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.AlarmSubscribe",
            "description": "<p>报警订阅是否开启</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.PositionSubscribe",
            "description": "<p>位置订阅是否开启</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.Online",
            "description": "<p>是否在线</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.Password",
            "description": "<p>接入密码, 为空时默认使用统一接入密码 livecms.ini &gt; sip &gt; device_password</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.RecordCenter",
            "description": "<p>设备录像是否进行中心检索</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.RecordIndistinct",
            "description": "<p>设备录像是否模糊查询</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.CivilCodeFirst",
            "description": "<p>目录结构是否行政区域优先</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "DeviceList.KeepOriginalTree",
            "description": "<p>目录结构是否保持原样</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "DeviceList.CommandTransport",
            "description": "<p>信令传输模式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "DeviceList.MediaTransport",
            "description": "<p>流传输模式(TCP/UDP)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "DeviceList.MediaTransportMode",
            "description": "<p>流传输模式(主动/被动)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.RemoteIP",
            "description": "<p>出口IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "DeviceList.RemotePort",
            "description": "<p>端口</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "DeviceList.Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "DeviceList.Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.LastRegisterAt",
            "description": "<p>最近注册</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.LastKeepaliveAt",
            "description": "<p>最近心跳</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.UpdatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceList.CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/positionlog",
    "title": "查询设备位置记录(轨迹)",
    "group": "device",
    "name": "DevicePositionLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "starttime",
            "description": "<p>开始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endtime",
            "description": "<p>结束时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "移动位置上报",
              "报警位置上报",
              "通道通知",
              "通道检索",
              "接口设置"
            ],
            "optional": true,
            "field": "method",
            "description": "<p>获取方式</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogCount",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogReserveDays",
            "description": "<p>记录最近天数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "LogList",
            "description": "<p>记录列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.ID",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "移动位置上报",
              "报警位置上报",
              "通道通知",
              "通道检索",
              "接口设置"
            ],
            "optional": true,
            "field": "LogList.Method",
            "description": "<p>获取方式</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogList.Longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogList.Latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.CreatedAt",
            "description": "<p>记录时间, YYYY-MM-DD HH:mm:ss</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息"
  },
  {
    "type": "get",
    "url": "/api/v1/device/remove",
    "title": "删除离线设备",
    "group": "device",
    "name": "DeviceRemove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelaudio",
    "title": "设置通道音频开关",
    "group": "device",
    "name": "DeviceSetChannelAudio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "audio",
            "defaultValue": "false",
            "description": "<p>音频是否开启</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelcloudrecord",
    "title": "设置通道云端录像",
    "description": "<p>云端录像开启, 拉流后会自动录像存储到服务器, 默认关闭</p>",
    "group": "device",
    "name": "DeviceSetChannelCloudRecord",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "cloudrecord",
            "defaultValue": "false",
            "description": "<p>是否云端录像, 当为 true 时, 启动云端录像</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false",
              "preserve"
            ],
            "optional": true,
            "field": "ondemand",
            "defaultValue": "preserve",
            "description": "<p>是否同时设置按需直播, 默认取值 preserve 表示不设置, 保持原样</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelid",
    "title": "自定义通道国标编号",
    "description": "<p>用于级联, 以自定义国标编号级联共享给上级平台</p>",
    "group": "device",
    "name": "DeviceSetChannelID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>自定义国标编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelname",
    "title": "自定义通道名称",
    "description": "<p>用于下级不上报通道名称, 或上报通道名称不正确的场景, 在本域纠正通道名称</p>",
    "group": "device",
    "name": "DeviceSetChannelName",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>自定义名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "custom_id",
            "description": "<p>自定义编号,可选,用于级联</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelondemand",
    "title": "设置通道按需直播",
    "description": "<p>按需直播开启后, 系统自动停止没有客户端播放的视频流, 默认开启</p>",
    "group": "device",
    "name": "DeviceSetChannelOndemand",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "ondemand",
            "defaultValue": "true",
            "description": "<p>是否按需直播, 当为 true 时, 系统自动停止没有播放客户端的流</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelptztype",
    "title": "自定义通道云台类型",
    "description": "<p>用于下级不上报云台类型, 或上报云台类型不正确的场景, 在本域纠正云台类型</p>",
    "group": "device",
    "name": "DeviceSetChannelPTZType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ptz_type",
            "defaultValue": "0",
            "description": "<p>云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelposition",
    "title": "自定义通道移动位置",
    "description": "<p>用于下级不上报移动位置, 或上报移动位置不正确的场景, 在本域纠正移动位置</p>",
    "group": "device",
    "name": "DeviceSetChannelPosition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "altitude",
            "description": "<p>海拨高度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "speed",
            "description": "<p>速度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "direction",
            "description": "<p>方向(0~360)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelproperty",
    "title": "自定义通道属性",
    "description": "<p>用于下级不上报通道属性, 或上报通道属性不正确的场景, 在本域纠正通道属性</p>",
    "group": "device",
    "name": "DeviceSetChannelProperty",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "Name",
              "Status",
              "Block",
              "CivilCode",
              "Address",
              "Manufacturer",
              "Model",
              "Firmware",
              "SerialNumber",
              "IPAddress",
              "Port",
              "Longitude",
              "Latitude"
            ],
            "optional": false,
            "field": "k",
            "description": "<p>自定义属性名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "v",
            "description": "<p>自定义属性值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setchannelshared",
    "title": "设置通道分享开关",
    "description": "<p>分享开启后, 充许用户在未登录认证的情况下, 观看通道直播和回放</p>",
    "group": "device",
    "name": "DeviceSetChannelShared",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "shared",
            "defaultValue": "false",
            "description": "<p>分享是否开启</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setinfo",
    "title": "编辑设备",
    "group": "device",
    "name": "DeviceSetInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "custom_name",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "TCP",
              "UDP"
            ],
            "optional": false,
            "field": "media_transport",
            "description": "<p>流传输模式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "passive",
              "active"
            ],
            "optional": true,
            "field": "media_transport_mode",
            "defaultValue": "passive",
            "description": "<p>主被动模式, 当 media_transport 为 TCP 时有效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_id",
            "description": "<p>针对该设备的拉流 SMSID, 为空时自动选择负载最小的SMS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_group_id",
            "description": "<p>针对该设备的拉流 SMS 分组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "recv_stream_ip",
            "description": "<p>针对该设备的收流IP, 为空时默认使用 livesms.ini &gt; sip &gt; host</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "drop_channel_type",
            "description": "<p>过滤通道类型, 多个用逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contact_ip",
            "description": "<p>针对该设备的信令IP, 为空时默认使用 livecms.ini &gt; sip &gt; host</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "GB2312",
              "GB18030",
              "UTF-8"
            ],
            "optional": true,
            "field": "charset",
            "description": "<p>针对该设备使用的字符集, 为空时自动识别</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "catalog_interval",
            "defaultValue": "3600",
            "description": "<p>目录获取周期(秒)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "subscribe_interval",
            "defaultValue": "0",
            "description": "<p>订阅周期(秒), 0 表示不订阅</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "catalog_subscribe",
            "defaultValue": "false",
            "description": "<p>是否目录订阅</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "alarm_subscribe",
            "defaultValue": "false",
            "description": "<p>是否报警订阅</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "position_subscribe",
            "defaultValue": "false",
            "description": "<p>是否位置订阅</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>接入密码, 为空时默认使用统一接入密码 livecms.ini &gt; sip &gt; device_password</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "record_center",
            "defaultValue": "false",
            "description": "<p>设备录像是否进行中心检索</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "record_indistinct",
            "defaultValue": "false",
            "description": "<p>设备录像是否模糊查询</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "civil_code_first",
            "defaultValue": "false",
            "description": "<p>目录结构是否行政区域优先</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "keep_original_tree",
            "defaultValue": "false",
            "description": "<p>目录结构是否保持原样</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setmediatransport",
    "title": "设置流传输模式",
    "group": "device",
    "name": "DeviceSetMediaTransport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "TCP",
              "UDP"
            ],
            "optional": false,
            "field": "media_transport",
            "description": "<p>流传输模式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "active",
              "passive"
            ],
            "optional": true,
            "field": "media_transport_mode",
            "defaultValue": "passive",
            "description": "<p>主被动模式, media_transport = TCP 时有效</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setname",
    "title": "自定义设备名称",
    "group": "device",
    "name": "DeviceSetName",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "custom_name",
            "description": "<p>自定义名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setpresetname",
    "title": "自定义预置位名称",
    "group": "device",
    "name": "DeviceSetPresetName",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "preset",
            "description": "<p>预置位编号(1~255)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>自定义名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/setsms",
    "title": "指定设备推流SMS",
    "description": "<p>指定设备推流时使用的 SMS</p>",
    "group": "device",
    "name": "DeviceSetSMS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_id",
            "description": "<p>指定到 SMS ID, 为空时, 自动选择负载最小的 SMS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_group_id",
            "description": "<p>指定到 SMS 分组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/device/statuslog",
    "title": "查询设备状态记录",
    "group": "device",
    "name": "DeviceStatusLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "starttime",
            "description": "<p>开始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endtime",
            "description": "<p>结束时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogCount",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "LogReserveDays",
            "description": "<p>记录最近天数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "LogList",
            "description": "<p>记录列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.ID",
            "description": "<p>ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Status",
            "description": "<p>状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.Description",
            "description": "<p>描述</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogList.CreatedAt",
            "description": "<p>记录时间, YYYY-MM-DD HH:mm:ss</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息"
  },
  {
    "type": "get",
    "url": "/api/v1/device/streamlog",
    "title": "查询设备流量统计",
    "group": "device",
    "name": "DeviceStreamLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "today",
              "yesterday",
              "week",
              "month"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "today",
            "description": "<p>统计方式(今天，昨天，最近7天，最近30天)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>流量统计列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "List.Time",
            "description": "<p>时间, YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "List.InBytes",
            "description": "<p>接收字节大小</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "List.OutBytes",
            "description": "<p>发送字节大小</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/device_api.go",
    "groupTitle": "设备信息"
  },
  {
    "type": "get",
    "url": "/api/v1/playback/control",
    "title": "回放控制",
    "group": "playback",
    "name": "PlaybackControl",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streamid",
            "description": "<p>回放流ID, 由开始回放接口(PlaybackStart)返回</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "play",
              "pause",
              "teardown",
              "scale"
            ],
            "optional": false,
            "field": "command",
            "description": "<p>回放控制类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "range",
            "defaultValue": "now",
            "description": "<p>command=play 时有效,表示从当前位置以当前播放速度跳转到指定range(单位s)的时间点播放;range=now 表示从当前位置开始播放,比如:暂停后恢复播放,则指定range=now</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "scale",
            "defaultValue": "2",
            "description": "<p>command=scale 时有效,倍数播放倍率,1=正常播放,大于0小于1为慢放,如:0.5=以0.5倍的速度慢放;大于1为快放,如:2=以2倍的速度快放,负数为倒放,参数意义相同</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/playback_api.go",
    "groupTitle": "前端设备录像",
    "groupDescription": "<p>调取前端设备录像</p>",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/playback/recordlist",
    "title": "查询录像列表",
    "group": "playback",
    "name": "PlaybackRecordList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "starttime",
            "description": "<p>开始时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endtime",
            "defaultValue": "now",
            "description": "<p>结束时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "all",
              "time",
              "alarm",
              "manual"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "all",
            "description": "<p>录像类型, all-所有, time-定时录像, alarm-报警录像, manual-手动录像</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false",
              "config"
            ],
            "optional": true,
            "field": "center",
            "defaultValue": "config",
            "description": "<p>是否进行中心历史记录检索, 默认 config 表示 读取设备开关配置</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false",
              "config"
            ],
            "optional": true,
            "field": "indistinct",
            "defaultValue": "config",
            "description": "<p>是否模糊查询, 即同时进行中心检索和前端检索并将结果统一返回, 默认 config 表示 读取设备开关配置</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "defaultValue": "15",
            "description": "<p>超时时间(秒)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/playback_api.go",
    "groupTitle": "前端设备录像",
    "groupDescription": "<p>调取前端设备录像</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SumNum",
            "description": "<p>录像总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "RecordList",
            "description": "<p>录像列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.DeviceID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.FilePath",
            "description": "<p>文件路径名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.Address",
            "description": "<p>录像地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.StartTime",
            "description": "<p>录像开始时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.EndTime",
            "description": "<p>录像结束时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "RecordList.Secrecy",
            "description": "<p>保密属性, 0-不涉密, 1-涉密</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "time",
              "alarm",
              "manual",
              "all"
            ],
            "optional": false,
            "field": "RecordList.Type",
            "description": "<p>录像产生类型</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.RecorderID",
            "description": "<p>录像触发者ID</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/playback/start",
    "title": "开始回放",
    "description": "<p>注意: 回放流多路不复用, 为避免设备过载, 应及时调用 /api/v1/playback/stop 停止回放</p>",
    "group": "playback",
    "name": "PlaybackStart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "starttime",
            "description": "<p>开始时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endtime",
            "defaultValue": "now",
            "description": "<p>结束时间, YYYY-MM-DDTHH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "download",
            "defaultValue": "false",
            "description": "<p>下载标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "download_speed",
            "defaultValue": "4",
            "description": "<p>下载倍速, 仅当 download=true 时有效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_id",
            "description": "<p>指定SMS，默认取设备配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_group_id",
            "description": "<p>指定SMS分组，默认取设备配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cdn",
            "description": "<p>转推 CDN 地址, 形如: [rtmp|rtsp]://xxx, encodeURIComponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "true",
              "false",
              "config"
            ],
            "optional": true,
            "field": "audio",
            "defaultValue": "config",
            "description": "<p>是否开启音频, 默认 config 表示 读取通道音频开关配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "TCP",
              "UDP",
              "config"
            ],
            "optional": true,
            "field": "transport",
            "defaultValue": "config",
            "description": "<p>流传输模式, 默认 config 表示 读取设备流传输模式配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "active",
              "passive"
            ],
            "optional": true,
            "field": "transport_mode",
            "defaultValue": "passive",
            "description": "<p>当 transport=TCP 时有效, 指示流传输主被动模式, 默认被动</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timezone",
            "defaultValue": "Asia/Shanghai",
            "description": "<p>时区, 默认使用 Asia/Shanghai</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "description": "<p>拉流超时(秒), 默认使用 livecms.ini &gt; sip &gt; ack_timeout</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/playback_api.go",
    "groupTitle": "前端设备录像",
    "groupDescription": "<p>调取前端设备录像</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>回放流ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SMSID",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelName",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelCustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelOSD",
            "description": "<p>通道水印</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WEBRTC",
            "description": "<p>WEBRTC 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "FLV",
            "description": "<p>HTTP-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WS_FLV",
            "description": "<p>Websocket-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RTMP",
            "description": "<p>RTMP 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "HLS",
            "description": "<p>HLS(M3U8) 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RTSP",
            "description": "<p>RTSP 播放地址， 需要 SMS 配置 RTSP 端口开启 RTSP 服务</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CDN",
            "description": "<p>转推 CDN 地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SnapURL",
            "description": "<p>快照地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "Transport",
            "description": "<p>流传输模式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StartAt",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RecordStartAt",
            "description": "<p>实时录像开始时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Duration",
            "description": "<p>持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceVideoCodecName",
            "description": "<p>原始视频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoWidth",
            "description": "<p>原始视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoHeight",
            "description": "<p>原始视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoFrameRate",
            "description": "<p>原始视频帧率</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceAudioCodecName",
            "description": "<p>原始音频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceAudioSampleRate",
            "description": "<p>原始音频采样率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPCount",
            "description": "<p>收包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostCount",
            "description": "<p>丢包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostRate",
            "description": "<p>丢包率百分比</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "VideoFrameCount",
            "description": "<p>视频帧数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AudioEnable",
            "description": "<p>是否开启音频</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Ondemand",
            "description": "<p>是否按需</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBytes",
            "description": "<p>收流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBitRate",
            "description": "<p>收流平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "OutBytes",
            "description": "<p>分发流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NumOutputs",
            "description": "<p>在线人数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CascadeSize",
            "description": "<p>级联数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "PlaybackDuration",
            "description": "<p>回放文件总时长(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "TimestampSec",
            "description": "<p>当前回放时长(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "PlaybackProgress",
            "description": "<p>回放进度([0-1]), 按时间截计算(TimestampSec/PlaybackDuration)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "DownloadProgress",
            "description": "<p>下载进度([0-1]), 按文件大小计算(InBytes/PlaybackFileSize)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "PlaybackFileSize",
            "description": "<p>下载文件总大小</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "PlaybackFileURL",
            "description": "<p>下载文件链接, playback stop 之后方可用</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "PlaybackFileError",
            "description": "<p>下载文件异常终止消息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/playback/stop",
    "title": "回放流停止",
    "group": "playback",
    "name": "PlaybackStop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streamid",
            "description": "<p>回放流ID, 由开始回放接口(PlaybackStart)返回</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "PlaybackFileURL",
            "description": "<p>下载文件链接</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/playback_api.go",
    "groupTitle": "前端设备录像",
    "groupDescription": "<p>调取前端设备录像</p>"
  },
  {
    "type": "get",
    "url": "/api/v1/playback/streaminfo",
    "title": "单条回放流信息",
    "description": "<p>可用于查询回放/下载进度</p>",
    "group": "playback",
    "name": "PlaybackStreamInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streamid",
            "description": "<p>回放流ID, 由开始回放接口(PlaybackStart)返回</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/playback_api.go",
    "groupTitle": "前端设备录像",
    "groupDescription": "<p>调取前端设备录像</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>回放流ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SMSID",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelName",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelCustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelOSD",
            "description": "<p>通道水印</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WEBRTC",
            "description": "<p>WEBRTC 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "FLV",
            "description": "<p>HTTP-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WS_FLV",
            "description": "<p>Websocket-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RTMP",
            "description": "<p>RTMP 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "HLS",
            "description": "<p>HLS(M3U8) 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RTSP",
            "description": "<p>RTSP 播放地址， 需要 SMS 配置 RTSP 端口开启 RTSP 服务</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CDN",
            "description": "<p>转推 CDN 地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SnapURL",
            "description": "<p>快照地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "Transport",
            "description": "<p>流传输模式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StartAt",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RecordStartAt",
            "description": "<p>实时录像开始时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Duration",
            "description": "<p>持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceVideoCodecName",
            "description": "<p>原始视频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoWidth",
            "description": "<p>原始视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoHeight",
            "description": "<p>原始视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoFrameRate",
            "description": "<p>原始视频帧率</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceAudioCodecName",
            "description": "<p>原始音频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceAudioSampleRate",
            "description": "<p>原始音频采样率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPCount",
            "description": "<p>收包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostCount",
            "description": "<p>丢包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostRate",
            "description": "<p>丢包率百分比</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "VideoFrameCount",
            "description": "<p>视频帧数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AudioEnable",
            "description": "<p>是否开启音频</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Ondemand",
            "description": "<p>是否按需</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBytes",
            "description": "<p>收流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBitRate",
            "description": "<p>收流平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "OutBytes",
            "description": "<p>分发流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NumOutputs",
            "description": "<p>在线人数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CascadeSize",
            "description": "<p>级联数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "PlaybackDuration",
            "description": "<p>回放文件总时长(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "TimestampSec",
            "description": "<p>当前回放时长(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "PlaybackProgress",
            "description": "<p>回放进度([0-1]), 按时间截计算(TimestampSec/PlaybackDuration)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "DownloadProgress",
            "description": "<p>下载进度([0-1]), 按文件大小计算(InBytes/PlaybackFileSize)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "PlaybackFileSize",
            "description": "<p>下载文件总大小</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "PlaybackFileURL",
            "description": "<p>下载文件链接, playback stop 之后方可用</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "PlaybackFileError",
            "description": "<p>下载文件异常终止消息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/playback/streamlist",
    "title": "回放流列表",
    "group": "playback",
    "name": "PlaybackStreamList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>分页开始, 从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>分页大小, 0 不分页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "acodec",
            "description": "<p>音频编码: pcm_alaw, pcm_mulaw, aac...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "vcodec",
            "description": "<p>视频编码: h264, hevc, mpeg2video...</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "PlaybackCount",
            "description": "<p>总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Playbacks",
            "description": "<p>直播列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.StreamID",
            "description": "<p>回放流ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.SMSID",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.ChannelID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.ChannelName",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.FLV",
            "description": "<p>HTTP-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.WS_FLV",
            "description": "<p>Websocket-FLV</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.RTMP",
            "description": "<p>RTMP 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.HLS",
            "description": "<p>HLS(M3U8) 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Playbacks.RTSP",
            "description": "<p>RTSP 播放地址，需要 SMS 配置 RTSP 端口开启 RTSP 服务</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Playbacks.CDN",
            "description": "<p>转推 CDN 地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Playbacks.SnapURL",
            "description": "<p>快照地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "Playbacks.Transport",
            "description": "<p>流传输模式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.StartAt",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Playbacks.RecordStartAt",
            "description": "<p>实时录像开始时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.Duration",
            "description": "<p>持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.SourceVideoCodecName",
            "description": "<p>原始视频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.SourceVideoWidth",
            "description": "<p>原始视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.SourceVideoHeight",
            "description": "<p>原始视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.SourceVideoFrameRate",
            "description": "<p>原始视频帧率</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.SourceAudioCodecName",
            "description": "<p>原始音频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.SourceAudioSampleRate",
            "description": "<p>原始音频采样率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.RTPCount",
            "description": "<p>收包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.RTPLostCount",
            "description": "<p>丢包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.RTPLostRate",
            "description": "<p>丢包率百分比</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.VideoFrameCount",
            "description": "<p>视频帧数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Playbacks.AudioEnable",
            "description": "<p>是否开启音频</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Playbacks.Ondemand",
            "description": "<p>是否按需</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.InBytes",
            "description": "<p>收流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.InBitRate",
            "description": "<p>收流平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.OutBytes",
            "description": "<p>分发流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.NumOutputs",
            "description": "<p>在线人数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.CascadeSize",
            "description": "<p>级联数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.PlaybackDuration",
            "description": "<p>回放文件总时长(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.TimestampSec",
            "description": "<p>当前回放时间截(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.PlaybackProgress",
            "description": "<p>回放进度([0-1]), 按时间截计算(TimestampSec/PlaybackDuration)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.DownloadProgress",
            "description": "<p>下载进度([0-1]), 按文件大小计算(InBytes/PlaybackFileSize)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Playbacks.PlaybackFileSize",
            "description": "<p>下载文件总大小</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Playbacks.PlaybackFileURL",
            "description": "<p>下载文件链接, playback stop 之后可用</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Playbacks.PlaybackFileError",
            "description": "<p>下载文件异常终止消息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/playback_api.go",
    "groupTitle": "前端设备录像",
    "groupDescription": "<p>调取前端设备录像</p>"
  },
  {
    "type": "get",
    "url": "/api/v1/record/query",
    "title": "实时录像查询",
    "group": "record",
    "name": "RecordQuery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streamid",
            "description": "<p>流标识, 来自 开始直播(/api/v1/stream/start) 或 开始回放(/api/v1/playback/start) 接口返回的 StreamID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/record_api.go",
    "groupTitle": "实时录像",
    "groupDescription": "<p>控制保活流的实时录像, 当停止录像时, 返回从实时录像开始到实时录像停止期间的录像 MP4 文件下载链接</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>流标识</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RecordCount",
            "description": "<p>录像文件总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "RecordList",
            "description": "<p>文件列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.StartTime",
            "description": "<p>录像文件起始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.EndTime",
            "description": "<p>录像文件结束时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.DownloadURL",
            "description": "<p>录像文件下载地址, EndTime 不为空时方可用</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/record/start",
    "title": "实时录像开始",
    "group": "record",
    "name": "RecordStart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streamid",
            "description": "<p>流标识, 来自 开始直播(/api/v1/stream/start) 或 开始回放(/api/v1/playback/start) 接口返回的 StreamID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "interval",
            "defaultValue": "0",
            "description": "<p>录像分段周期(秒), 默认为 0 表示录像不分段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DownloadURL",
            "description": "<p>实时录像下载链接, record stop 之后方可用</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/record_api.go",
    "groupTitle": "实时录像",
    "groupDescription": "<p>控制保活流的实时录像, 当停止录像时, 返回从实时录像开始到实时录像停止期间的录像 MP4 文件下载链接</p>"
  },
  {
    "type": "get",
    "url": "/api/v1/record/stop",
    "title": "实时录像停止",
    "group": "record",
    "name": "RecordStop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streamid",
            "description": "<p>流标识, 来自 开始直播(/api/v1/stream/start) 或 开始回放(/api/v1/playback/start) 接口返回的 StreamID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/record_api.go",
    "groupTitle": "实时录像",
    "groupDescription": "<p>控制保活流的实时录像, 当停止录像时, 返回从实时录像开始到实时录像停止期间的录像 MP4 文件下载链接</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>流标识</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RecordCount",
            "description": "<p>录像文件总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "RecordList",
            "description": "<p>文件列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.StartTime",
            "description": "<p>录像文件起始时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.EndTime",
            "description": "<p>录像文件结束时间, YYYYMMDDHHmmss</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RecordList.DownloadURL",
            "description": "<p>录像文件下载地址, EndTime 不为空时方可用</p>"
          }
        ]
      }
    }
  },
  {
    "type": "订阅",
    "url": "报警信息订阅",
    "title": "报警信息订阅",
    "group": "redis",
    "name": "SubscribeAlarm",
    "header": {
      "examples": [
        {
          "title": "指令:",
          "content": "subscribe alarm",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "报警信息",
          "content": "消息内容为报警信息 JSON 序列化字符串，示例如：\n\"alarm\"\n\"{\\\"ID\\\":\\\"Rq5Zl0-Gg\\\",\\\"DeviceID\\\":\\\"44020000001320000002\\\",\\\"DeviceName\\\":\\\"\\\",\\\"ChannelID\\\":\\\"34020000001310000001\\\",\\\"ChannelName\\\":\\\"IP PTZ Camera\\\",\\\"AlarmPriority\\\":1,\\\"AlarmPriorityName\\\":\\\"\\xe4\\xb8\\x80\\xe7\\xba\\xa7\\xe8\\xad\\xa6\\xe6\\x83\\x85\\\",\\\"AlarmMethod\\\":5,\\\"AlarmMethodName\\\":\\\"\\xe8\\xa7\\x86\\xe9\\xa2\\x91\\xe6\\x8a\\xa5\\xe8\\xad\\xa6\\\",\\\"Longitude\\\":0,\\\"Latitude\\\":0,\\\"AlarmDescription\\\":\\\"\\xe8\\xa7\\x86\\xe9\\xa2\\x91\\xe5\\x8a\\xa8\\xe6\\xa3\\x80\\\",\\\"AlarmType\\\":2,\\\"AlarmTypeName\\\":\\\"\\xe8\\xbf\\x90\\xe5\\x8a\\xa8\\xe7\\x9b\\xae\\xe6\\xa0\\x87\\xe6\\xa3\\x80\\xe6\\xb5\\x8b\\xe6\\x8a\\xa5\\xe8\\xad\\xa6\\\",\\\"AlarmTypeParam\\\":\\\"\\\\n\\\",\\\"Time\\\":\\\"2021-01-07 17:11:33\\\",\\\"CreatedAt\\\":\\\"2021-01-07 17:11:33\\\"}\"\n\n国标设备列表 -> 编辑 -> 订阅项目 开启报警订阅",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "REDIS订阅"
  },
  {
    "type": "订阅",
    "url": "设备状态订阅",
    "title": "设备状态订阅",
    "group": "redis",
    "name": "SubscribeDevice",
    "header": {
      "examples": [
        {
          "title": "指令:",
          "content": "subscribe device",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "设备上线消息",
          "content": "消息内容为 \"设备国标编号 ON\"，示例如：\n\"device\"\n\"34020000001320000109 ON\"",
          "type": "json"
        },
        {
          "title": "设备离线消息",
          "content": "消息内容为 \"设备国标编号 OFF\"，示例如：\n\"device\"\n\"34020000001320000109 OFF\"",
          "type": "json"
        },
        {
          "title": "通道上线消息",
          "content": "消息内容为 \"设备国标编号:通道国标编号 ON\"，示例如：\n\"device\"\n\"34020000001320000109:34020000001320000109 ON\"\n\n国标设备列表 -> 编辑 -> 订阅项目 开启目录订阅",
          "type": "json"
        },
        {
          "title": "通道离线消息",
          "content": "消息内容为 \"设备国标编号:通道国标编号 OFF\"，示例如：\n\"device\"\n\"34020000001320000109:34020000001320000109 OFF\"\n\n国标设备列表 -> 编辑 -> 订阅项目 开启目录订阅",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "REDIS订阅"
  },
  {
    "type": "订阅",
    "url": "移动位置订阅",
    "title": "移动位置订阅",
    "group": "redis",
    "name": "SubscribeMobilePosition",
    "header": {
      "examples": [
        {
          "title": "指令:",
          "content": "subscribe mobileposition",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "移动位置信息示例",
          "content": "消息内容为移动位置信息 JSON 序列化字符串\n报警上来的移动位置信息，示例如：\n\"mobileposition\"\n\"{\\\"time\\\":\\\"2021-01-07T17:11:33\\\",\\\"serial\\\":\\\"44020000001320000001\\\",\\\"code\\\":\\\"44020000001320000001\\\",\\\"longitude\\\":\\\"22.67\\\",\\\"latitude\\\":\\\"145\\\"}\"\n\n国标设备列表 -> 编辑 -> 订阅项目 开启位置订阅\n\"mobileposition\"\n\"{\\\"time\\\":\\\"2021-01-07T17:11:33\\\",\\\"serial\\\":\\\"44020000001320000001\\\",\\\"code\\\":\\\"44020000001320000001\\\",\\\"longitude\\\":\\\"22.67\\\",\\\"latitude\\\":\\\"145\\\",\\\"altitude\\\":\\\"20\\\",\\\"direction\\\":\\\"22000\\\",\\\"speed\\\":\\\"0\\\"}\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "REDIS订阅"
  },
  {
    "type": "配置",
    "url": "配置连接REDIS",
    "title": "配置连接REDIS",
    "group": "redis",
    "name": "SubscribeRedis",
    "header": {
      "examples": [
        {
          "title": "配置连接REDIS 说明:",
          "content": "LiveGBS自带了 REDIS 的服务，可以通过下面方式查看到 REDIS 的配置信息，\n在LiveCMS解压目录下 livecms.ini -> [redis] 下面可以看到如：\n\n[redis]\nport=26379\npassword=livegbs@2019\n\n下面示例如何通过 REDIS 客户端连接 REDIS (其中 192.168.2.153 是示例的部署LiveCMS的服务器的IP)\nredis-cli.exe -h 192.168.2.153 -p 26379 -a livegbs@2019",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "REDIS订阅"
  },
  {
    "type": "get",
    "url": "/api/v1/stream/info",
    "title": "单条直播流信息",
    "group": "stream",
    "name": "StreamInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streamid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "touch",
            "defaultValue": "false",
            "description": "<p>是否同时保活直播流</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_api.go",
    "groupTitle": "实时直播",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>直播流ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SMSID",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelName",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelCustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelOSD",
            "description": "<p>通道水印</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WEBRTC",
            "description": "<p>WEBRTC 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "FLV",
            "description": "<p>HTTP-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WS_FLV",
            "description": "<p>Websocket-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RTMP",
            "description": "<p>RTMP 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "HLS",
            "description": "<p>HLS(M3U8) 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RTSP",
            "description": "<p>RTSP 播放地址， 需要 SMS 配置 RTSP 端口开启 RTSP 服务</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CDN",
            "description": "<p>转推 CDN 地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SnapURL",
            "description": "<p>快照地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "Transport",
            "description": "<p>流传输模式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StartAt",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RecordStartAt",
            "description": "<p>实时录像开始时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Duration",
            "description": "<p>持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceVideoCodecName",
            "description": "<p>原始视频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoWidth",
            "description": "<p>原始视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoHeight",
            "description": "<p>原始视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoFrameRate",
            "description": "<p>原始视频帧率</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceAudioCodecName",
            "description": "<p>原始音频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceAudioSampleRate",
            "description": "<p>原始音频采样率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPCount",
            "description": "<p>收包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostCount",
            "description": "<p>丢包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostRate",
            "description": "<p>丢包率百分比</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "VideoFrameCount",
            "description": "<p>视频帧数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AudioEnable",
            "description": "<p>是否开启音频</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Ondemand",
            "description": "<p>是否按需直播</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBytes",
            "description": "<p>收流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBitRate",
            "description": "<p>收流平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "OutBytes",
            "description": "<p>分发流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NumOutputs",
            "description": "<p>在线人数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CascadeSize",
            "description": "<p>级联数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CloudRecord",
            "description": "<p>是否开启云端录像</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelaySize",
            "description": "<p>转推数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelPTZType",
            "description": "<p>通道云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/stream/list",
    "title": "直播流列表",
    "group": "stream",
    "name": "StreamList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>分页开始, 从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>分页大小, 0 不分页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "acodec",
            "description": "<p>音频编码: pcm_alaw,pcm_mulaw,aac...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "vcodec",
            "description": "<p>视频编码: h264,hevc,mpeg2video...</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "audio",
            "description": "<p>是否开启音频</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "ondemand",
            "description": "<p>是否按需</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "cloud_record",
            "description": "<p>是否开启云端录像</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "StreamCount",
            "description": "<p>总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Streams",
            "description": "<p>直播列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.StreamID",
            "description": "<p>直播流ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.SMSID",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.ChannelID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.ChannelName",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.FLV",
            "description": "<p>HTTP-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.WS_FLV",
            "description": "<p>Websocket-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.RTMP",
            "description": "<p>RTMP 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.HLS",
            "description": "<p>HLS(M3U8) 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Streams.RTSP",
            "description": "<p>RTSP 播放地址，需要 SMS 配置 RTSP 端口开启 RTSP 服务</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Streams.CDN",
            "description": "<p>转推 CDN 地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Streams.SnapURL",
            "description": "<p>快照地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "Streams.Transport",
            "description": "<p>流传输方式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.StartAt",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Streams.RecordStartAt",
            "description": "<p>实时录像开始时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.Duration",
            "description": "<p>持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.SourceVideoCodecName",
            "description": "<p>原始视频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.SourceVideoWidth",
            "description": "<p>原始视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.SourceVideoHeight",
            "description": "<p>原始视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.SourceVideoFrameRate",
            "description": "<p>原始视频帧率</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Streams.SourceAudioCodecName",
            "description": "<p>原始音频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.SourceAudioSampleRate",
            "description": "<p>原始音频采样率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.RTPCount",
            "description": "<p>收包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.RTPLostCount",
            "description": "<p>丢包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.RTPLostRate",
            "description": "<p>丢包率百分比</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.VideoFrameCount",
            "description": "<p>视频帧数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Streams.AudioEnable",
            "description": "<p>是否开启音频</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Streams.Ondemand",
            "description": "<p>是否按需直播</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Streams.CloudRecord",
            "description": "<p>是否开启云端录像</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.InBytes",
            "description": "<p>收流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.InBitRate",
            "description": "<p>收流平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.OutBytes",
            "description": "<p>分发流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.NumOutputs",
            "description": "<p>在线人数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.CascadeSize",
            "description": "<p>级联数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Streams.RelaySize",
            "description": "<p>转推数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_api.go",
    "groupTitle": "实时直播"
  },
  {
    "type": "get",
    "url": "/api/v1/stream/osd",
    "title": "视频水印",
    "group": "stream",
    "name": "StreamOSD",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>通道国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streamid",
            "description": "<p>流标识, 来自 开始直播(/api/v1/stream/start) 或 开始回放(/api/v1/playback/start) 接口返回的 StreamID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>文字内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "defaultValue": "white",
            "description": "<p>文字颜色</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "border_color",
            "defaultValue": "black",
            "description": "<p>文字边框颜色</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "x",
            "description": "<p>文字水平位置X</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "y",
            "description": "<p>文字垂直位置Y</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "description": "<p>字体大小</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_api.go",
    "groupTitle": "实时直播",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/stream/relay/list",
    "title": "转推列表",
    "group": "stream",
    "name": "StreamRelayList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_relay_api.go",
    "groupTitle": "实时直播",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>直播流ID</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayCount",
            "description": "<p>转推总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "RelayList",
            "description": "<p>转推列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.CDN",
            "description": "<p>转推 CDN</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.VideoDrawText",
            "description": "<p>转推水印</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.StartAt",
            "description": "<p>转推开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.LatestGetFrameTime",
            "description": "<p>转推最近读帧时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Duration",
            "description": "<p>转推持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutBytes",
            "description": "<p>转推字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutBitRate",
            "description": "<p>转推平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutVideoBytes",
            "description": "<p>转推视频字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutVideoBitRate",
            "description": "<p>转推视频平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutAudioBytes",
            "description": "<p>转推音频字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutAudioBitRate",
            "description": "<p>转推音频平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "RelayList.Quality",
            "description": "<p>转推质量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoWidth",
            "description": "<p>转推视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoHeight",
            "description": "<p>转推视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoBitRate",
            "description": "<p>转推视频码率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoFrameRate",
            "description": "<p>转推视频帧率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoGOPSize",
            "description": "<p>转推视频关键帧间隔</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/stream/relay/start",
    "title": "直播转推",
    "group": "stream",
    "name": "StreamRelayStart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cdn",
            "description": "<p>转推 CDN 地址, 形如: [rtmp|rtsp]://xxx, encodeURIComponent</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "videowidth",
            "description": "<p>指定视频宽</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "videoheight",
            "description": "<p>指定视频高</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "videobitrate",
            "description": "<p>指定视频码率, 单位: Kbps</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "videoframerate",
            "description": "<p>指定视频帧率</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "videogopsize",
            "description": "<p>指定视频关键帧间隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "videodrawtext",
            "description": "<p>指定视频水印内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_relay_api.go",
    "groupTitle": "实时直播",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>直播流ID</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayCount",
            "description": "<p>转推总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "RelayList",
            "description": "<p>转推列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.CDN",
            "description": "<p>转推 CDN</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.VideoDrawText",
            "description": "<p>转推水印</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.StartAt",
            "description": "<p>转推开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.LatestGetFrameTime",
            "description": "<p>转推最近读帧时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Duration",
            "description": "<p>转推持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutBytes",
            "description": "<p>转推字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutBitRate",
            "description": "<p>转推平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutVideoBytes",
            "description": "<p>转推视频字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutVideoBitRate",
            "description": "<p>转推视频平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutAudioBytes",
            "description": "<p>转推音频字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutAudioBitRate",
            "description": "<p>转推音频平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "RelayList.Quality",
            "description": "<p>转推质量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoWidth",
            "description": "<p>转推视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoHeight",
            "description": "<p>转推视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoBitRate",
            "description": "<p>转推视频码率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoFrameRate",
            "description": "<p>转推视频帧率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoGOPSize",
            "description": "<p>转推视频关键帧间隔</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/stream/relay/stop",
    "title": "转推停止",
    "group": "stream",
    "name": "StreamRelayStop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cdn",
            "description": "<p>转推 CDN 地址, 形如: [rtmp|rtsp]://xxx, encodeURIComponent</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_relay_api.go",
    "groupTitle": "实时直播",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>直播流ID</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayCount",
            "description": "<p>转推总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "RelayList",
            "description": "<p>转推列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.CDN",
            "description": "<p>转推 CDN</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.VideoDrawText",
            "description": "<p>转推水印</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.StartAt",
            "description": "<p>转推开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RelayList.LatestGetFrameTime",
            "description": "<p>转推最近读帧时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Duration",
            "description": "<p>转推持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutBytes",
            "description": "<p>转推字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutBitRate",
            "description": "<p>转推平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutVideoBytes",
            "description": "<p>转推视频字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutVideoBitRate",
            "description": "<p>转推视频平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutAudioBytes",
            "description": "<p>转推音频字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.OutAudioBitRate",
            "description": "<p>转推音频平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "RelayList.Quality",
            "description": "<p>转推质量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoWidth",
            "description": "<p>转推视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoHeight",
            "description": "<p>转推视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoBitRate",
            "description": "<p>转推视频码率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoFrameRate",
            "description": "<p>转推视频帧率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelayList.Quality.VideoGOPSize",
            "description": "<p>转推视频关键帧间隔</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/stream/start",
    "title": "开始直播",
    "group": "stream",
    "name": "StreamStart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_id",
            "description": "<p>指定SMS，默认取设备配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sms_group_id",
            "description": "<p>指定SMS分组，默认取设备配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cdn",
            "description": "<p>转推 CDN 地址, 形如: [rtmp|rtsp]://xxx, encodeURIComponent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "true",
              "false",
              "config"
            ],
            "optional": true,
            "field": "audio",
            "defaultValue": "config",
            "description": "<p>是否开启音频, 默认 config 表示 读取通道音频开关配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "TCP",
              "UDP",
              "config"
            ],
            "optional": true,
            "field": "transport",
            "defaultValue": "config",
            "description": "<p>流传输模式， 默认 config 表示 读取设备流传输模式配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "active",
              "passive"
            ],
            "optional": true,
            "field": "transport_mode",
            "defaultValue": "passive",
            "description": "<p>当 transport=TCP 时有效, 指示流传输主被动模式, 默认被动</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "check_channel_status",
            "defaultValue": "false",
            "description": "<p>是否检查通道状态, 默认 false, 表示 拉流前不检查通道状态是否在线</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "description": "<p>拉流超时(秒), 默认使用 livecms.ini &gt; sip &gt; ack_timeout</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_api.go",
    "groupTitle": "实时直播",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StreamID",
            "description": "<p>直播流ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SMSID",
            "description": "<p>流媒体编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelName",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelCustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelOSD",
            "description": "<p>通道水印</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WEBRTC",
            "description": "<p>WEBRTC 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "FLV",
            "description": "<p>HTTP-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WS_FLV",
            "description": "<p>Websocket-FLV 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RTMP",
            "description": "<p>RTMP 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "HLS",
            "description": "<p>HLS(M3U8) 播放地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RTSP",
            "description": "<p>RTSP 播放地址， 需要 SMS 配置 RTSP 端口开启 RTSP 服务</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "CDN",
            "description": "<p>转推 CDN 地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "SnapURL",
            "description": "<p>快照地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "UDP",
              "TCP"
            ],
            "optional": false,
            "field": "Transport",
            "description": "<p>流传输模式</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StartAt",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RecordStartAt",
            "description": "<p>实时录像开始时间</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "Duration",
            "description": "<p>持续时间(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceVideoCodecName",
            "description": "<p>原始视频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoWidth",
            "description": "<p>原始视频宽</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoHeight",
            "description": "<p>原始视频高</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceVideoFrameRate",
            "description": "<p>原始视频帧率</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "SourceAudioCodecName",
            "description": "<p>原始音频编码</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "SourceAudioSampleRate",
            "description": "<p>原始音频采样率</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPCount",
            "description": "<p>收包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostCount",
            "description": "<p>丢包数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RTPLostRate",
            "description": "<p>丢包率百分比</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "VideoFrameCount",
            "description": "<p>视频帧数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "AudioEnable",
            "description": "<p>是否开启音频</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Ondemand",
            "description": "<p>是否按需直播</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBytes",
            "description": "<p>收流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "InBitRate",
            "description": "<p>收流平均码率(Kbps)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "OutBytes",
            "description": "<p>分发流字节大小(Byte)</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "NumOutputs",
            "description": "<p>在线人数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "CascadeSize",
            "description": "<p>级联数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "CloudRecord",
            "description": "<p>是否开启云端录像</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RelaySize",
            "description": "<p>转推数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelPTZType",
            "description": "<p>通道云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/stream/stop",
    "title": "直播流停止",
    "description": "<p>谨慎调用, 直播流单路拉取多路播放, 停止直播流可能影响其它正在同一通道上的客户端播放 <br>直播流在一定时间内(默认1分钟), 没有客户端观看会自动停止</p>",
    "group": "stream",
    "name": "StreamStop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "channel",
            "defaultValue": "1",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>通道编号,通过 /api/v1/device/channellist 获取的 ChannelList.ID, 该参数和 channel 二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "check_outputs",
            "defaultValue": "false",
            "description": "<p>是否检查通道在线人数, 默认 false, 表示 停止前不检查通道是否有客户端正在播放</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/stream_api.go",
    "groupTitle": "实时直播",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/getserverinfo",
    "title": "获取平台运行信息",
    "group": "sys",
    "name": "GetServerInfo",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>授权对象</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Hardware",
            "description": "<p>硬件信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "InterfaceVersion",
            "description": "<p>接口版本</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "APIAuth",
            "description": "<p>是否接口鉴权</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "RemainDays",
            "description": "<p>剩余授权时间(天)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RunningTime",
            "description": "<p>运行时长</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ServerTime",
            "description": "<p>系统时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "StartUpTime",
            "description": "<p>启动时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Server",
            "description": "<p>软件信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "PreferStreamFmt",
            "description": "<p>首选播放格式</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelCount",
            "description": "<p>通道数</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "VersionType",
            "description": "<p>版本类型</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogoText",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LogoMiniText",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CopyrightText",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "系统接口"
  },
  {
    "type": "get",
    "url": "/api/v1/userinfo",
    "title": "获取当前登录用户信息",
    "group": "sys",
    "name": "GetUserInfo",
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "系统接口",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": true,
            "field": "Roles",
            "description": "<p>角色</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": true,
            "field": "HasAllChannel",
            "description": "<p>是否关联所有通道</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": true,
            "field": "Cas",
            "description": "<p>是否是 Cas 单点登录用户</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": true,
            "field": "OAuth",
            "description": "<p>是否是 OAuth 单点登录用户</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "Token",
            "description": "<p>登录 Token</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "RemoteIP",
            "description": "<p>登录 IP</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "LoginAt",
            "description": "<p>登录时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/login",
    "title": "登录",
    "group": "sys",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码(经过md5加密,32位长度,不带中划线,不区分大小写)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "url_token_only",
            "description": "<p>是否只获取URLToken, 默认值 false, 推荐获取 URLToken 时带 url_token_only=true, 将不会入库持久 session, 减少库表操作</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "token_timeout",
            "defaultValue": "604800",
            "description": "<p>Token 超时(秒)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CookieToken",
            "description": "<p>用于方式一的鉴权</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "URLToken",
            "description": "<p>用于方式二的鉴权</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "StreamToken",
            "description": "<p>用于流地址鉴权, 流地址鉴权开启时有效</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "TokenTimeout",
            "description": "<p>Token 超时(秒)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200\n{\"URLToken\":\"slkdfjiw2ej.jskdfwe-wefadsf.sdfwoeuyqtew\", \"CookieToken\":\"mDC4tu-ig\", \"TokenTimeout\":604800}\n\n鉴权方式一：\nSet-Cookie: token=mDC4tu-ig; Path=/; Expires=Thu, 15 Nov 2018 03:13:26 GMT; Max-Age=604800; HttpOnly\n\n鉴权方式二：\n接口统一增加入参名 token, 传递值为返回的 URLToken\nhttp://ip:port/api/v1/xxx?token=slkdfjiw2ej.jskdfwe-wefadsf.sdfwoeuyqtew&otherparam=xxx\n\n流地址鉴权：\n流地址增加入参名 token, 传递值为返回的 StreamToken\nhttp://ip:port/sms/xxx/flv/hls/xxx.flv?token=xxx",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "系统接口"
  },
  {
    "type": "get",
    "url": "/api/v1/logout",
    "title": "登出",
    "group": "sys",
    "name": "Logout",
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "系统接口",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/modifypassword",
    "title": "修改密码",
    "group": "sys",
    "name": "ModifyPassword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpassword",
            "description": "<p>旧密码, MD5密文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpassword",
            "description": "<p>新密码, MD5密文</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CookieToken",
            "description": "<p>更新后的 CookieToken</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "URLToken",
            "description": "<p>更新后的 URLToken</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "TokenTimeout",
            "description": "<p>Token 超时(秒)</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "StreamToken",
            "description": "<p>用于流地址鉴权, 流地址鉴权开启时有效</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "AuthToken",
            "description": "<p>等同于 URLToken, 为了兼容保留</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>等同于 CookieToken, 为了兼容保留</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200\n{\"URLToken\":\"slkdfjiw2ej.jskdfwe-wefadsf.sdfwoeuyqtew\", \"CookieToken\":\"mDC4tu-ig\", \"TokenTimeout\":604800}\nSet-Cookie: token=mDC4tu-ig; Path=/; Expires=Thu, 15 Nov 2018 03:13:26 GMT; Max-Age=604800; HttpOnly",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "系统接口"
  },
  {
    "type": "get",
    "url": "/api/v1/restart",
    "title": "重启服务",
    "group": "sys",
    "name": "Restart",
    "version": "0.0.0",
    "filename": "routers/sys_api.go",
    "groupTitle": "系统接口",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/channellist",
    "title": "查询用户通道列表",
    "group": "user",
    "name": "UserChannelList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "device",
              "dir",
              "all"
            ],
            "optional": true,
            "field": "channel_type",
            "defaultValue": "all",
            "description": "<p>通道类型, device - 直接子设备, dir - 直接子目录, all - 所有</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "online",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "related",
            "defaultValue": "false",
            "description": "<p>是否只看已关联</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelCount",
            "description": "<p>通道总数</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelRelateCount",
            "description": "<p>已关联通道数</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "HasAllChannel",
            "description": "<p>是否关联所有通道</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "ChannelList",
            "description": "<p>通道列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.UserID",
            "description": "<p>用户ID, 有值时, 表示该通道已关联</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.ID",
            "description": "<p>通道编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.DeviceID",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.DeviceName",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.DeviceCustomName",
            "description": "<p>设备自定义名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.DeviceOnline",
            "description": "<p>设备在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelList.Channel",
            "description": "<p>通道序号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Name",
            "description": "<p>通道名称</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.Custom",
            "description": "<p>是否自定义通道</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CustomID",
            "description": "<p>通道自定义编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CustomName",
            "description": "<p>通道自定义名称</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ChannelList.SubCount",
            "description": "<p>子节点数, SubCount &gt; 0 表示该通道为子目录</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.SnapURL",
            "description": "<p>通道快照链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Manufacturer",
            "description": "<p>通道设备厂家</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Model",
            "description": "<p>通道设备型号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Owner",
            "description": "<p>通道设备归属</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.CivilCode",
            "description": "<p>行政区域</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.Address",
            "description": "<p>安装地址</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ChannelList.Parental",
            "description": "<p>当为通道设备时, 是否有通道子设备, 1-有,0-没有</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ChannelList.ParentID",
            "description": "<p>直接上级编号</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ChannelList.Secrecy",
            "description": "<p>保密属性, 缺省为0, 0-不涉密, 1-涉密</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "ChannelList.RegisterWay",
            "description": "<p>注册方式, 缺省为1, 1-IETF RFC3261, 2-基于口令的双向认证, 3-基于数字证书的双向认证</p>"
          },
          {
            "group": "200",
            "type": "String",
            "allowedValues": [
              "ON",
              "OFF"
            ],
            "optional": false,
            "field": "ChannelList.Status",
            "description": "<p>在线状态</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Longitude",
            "defaultValue": "0",
            "description": "<p>经度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Latitude",
            "defaultValue": "0",
            "description": "<p>纬度</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Altitude",
            "defaultValue": "0",
            "description": "<p>海拔高度, m</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Speed",
            "defaultValue": "0",
            "description": "<p>移动速度, km/h</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.Direction",
            "defaultValue": "0",
            "description": "<p>与正北方的顺时针夹角,取值范围 0~360</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "ChannelList.PTZType",
            "defaultValue": "0",
            "description": "<p>云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": true,
            "field": "ChannelList.CustomPTZType",
            "defaultValue": "0",
            "description": "<p>自定义云台类型, 0 - 未知, 1 - 球机, 2 - 半球, 3 - 固定枪机, 4 - 遥控枪机</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.BatteryLevel",
            "defaultValue": "0",
            "description": "<p>电量</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "ChannelList.SignalLevel",
            "defaultValue": "0",
            "description": "<p>信号强度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "ChannelList.DownloadSpeed",
            "description": "<p>下载倍速范围</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.Ondemand",
            "defaultValue": "true",
            "description": "<p>按需直播配置</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "ChannelList.AudioEnable",
            "defaultValue": "false",
            "description": "<p>音频开关配置</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/info",
    "title": "查询用户信息",
    "group": "user",
    "name": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名, 该参数和用户ID二选一传递即可</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Role",
            "description": "<p>角色, 多个角色以逗号间隔</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "Enable",
            "description": "<p>是否启用</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "HasAllChannel",
            "description": "<p>是否关联所有通道</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "LastLoginAt",
            "description": "<p>最近登录时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UpdatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/list",
    "title": "查询用户列表",
    "group": "user",
    "name": "UserList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "enable",
            "description": "<p>启用状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "UserCount",
            "description": "<p>用户总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "UserList",
            "description": "<p>用户列表</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "UserList.ID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UserList.Username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UserList.Role",
            "description": "<p>角色, 多个角色以逗号间隔</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UserList.Creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "UserList.Lock",
            "description": "<p>是否登录锁定</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "UserList.Enable",
            "description": "<p>是否启用</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "UserList.HasAllChannel",
            "description": "<p>是否关联所有通道</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UserList.LastLoginAt",
            "description": "<p>最近登录时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UserList.UpdatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "UserList.CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/remove",
    "title": "用户删除",
    "group": "user",
    "name": "UserRemove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID, 多个以逗号间隔</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/removechannels",
    "title": "设置用户移除关联通道",
    "group": "user",
    "name": "UserRemoveChannels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "channels[]",
            "description": "<p>通道列表,格式为 serial:code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/resetpassword",
    "title": "用户重置密码",
    "group": "user",
    "name": "UserResetPassword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名, 该参数和用户ID二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "cipherpwd",
            "defaultValue": "false",
            "description": "<p>密码是否是密文</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/save",
    "title": "用户保存",
    "group": "user",
    "name": "UserSave",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ID",
            "description": "<p>用户ID, 0表示新增, 否则为修改</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Role",
            "description": "<p>用户角色,多个角色以逗号间隔</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "Enable",
            "defaultValue": "false",
            "description": "<p>是否启用</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "DefaultUserPassword",
            "description": "<p>新增用户初始密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理"
  },
  {
    "type": "get",
    "url": "/api/v1/user/savechannels",
    "title": "设置用户保存关联通道",
    "group": "user",
    "name": "UserSaveChannels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "channels[]",
            "description": "<p>通道列表,格式为 serial:code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/setenable",
    "title": "设置用户启用状态",
    "group": "user",
    "name": "UserSetEnable",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名, 该参数和用户ID二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "enable",
            "defaultValue": "false",
            "description": "<p>是否启用</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/sethasallchannel",
    "title": "设置用户关联所有通道",
    "group": "user",
    "name": "UserSetHasAllChannel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名, 该参数和用户ID二选一传递即可</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "hasallchannel",
            "defaultValue": "false",
            "description": "<p>是否关联所有通道</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/sharenode",
    "title": "设置用户共享节点",
    "group": "user",
    "name": "UserShareNode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>节点设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>节点通道编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "share",
            "defaultValue": "true",
            "description": "<p>共享(true), 取消共享(false)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "subfetch",
            "defaultValue": "true",
            "description": "<p>是否包含子节点</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "uptrace",
            "defaultValue": "false",
            "description": "<p>是否包含父节点</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "devtree",
            "defaultValue": "true",
            "description": "<p>是否在设备树下共享父/子节点, true 表示在设备树下共享父/子节点, false 表示在分组树下共享父/子节点</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/unlock",
    "title": "用户解锁登录",
    "group": "user",
    "name": "UserUnlock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名, 该参数和用户ID二选一传递即可</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/user_api.go",
    "groupTitle": "用户管理",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/white/list",
    "title": "白名单列表",
    "group": "whitelist",
    "name": "WhiteList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始,从零开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/white_api.go",
    "groupTitle": "白名单",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "WhiteCount",
            "description": "<p>白名单总数</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "WhiteList",
            "description": "<p>白名单列表</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WhiteList.Serial",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WhiteList.Password",
            "description": "<p>接入密码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WhiteList.UserAgent",
            "description": "<p>UA</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WhiteList.RemoteIP",
            "description": "<p>IP</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "WhiteList.RemotePort",
            "description": "<p>端口</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WhiteList.Description",
            "description": "<p>描述信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WhiteList.UpdatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "WhiteList.CreatedAt",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v1/white/remove",
    "title": "白名单删除",
    "group": "whitelist",
    "name": "WhiteRemove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/white_api.go",
    "groupTitle": "白名单",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/white/save",
    "title": "白名单新增|编辑",
    "group": "whitelist",
    "name": "WhiteSave",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>设备国标编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>接入密码，为空时表示免密接入</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_agent",
            "description": "<p>UA，为空时表示不限接入UA</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remote_ip",
            "description": "<p>IP，为空时表示不限接入IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "remote_port",
            "description": "<p>端口，为空时表示不限接入端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>描述信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "save_device",
            "defaultValue": "false",
            "description": "<p>是否保存到设备列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/white_api.go",
    "groupTitle": "白名单",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  }
] });
