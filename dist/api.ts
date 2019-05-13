import { AxiosRequestConfig } from 'axios'
import instance from './instance'

/** 规范 数据格式 */
function common_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/common',
    ...opts
  })
}

/** 文件 上传 */
function file_upload_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/file/upload',
    ...opts
  })
}

/** 文件 获取 */
function file_image_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/file/image/get',
    ...opts
  })
}

/** 费用 新增计费策略 */
function expense_strategy_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/expense/strategy/create',
    ...opts
  })
}

/** 费用 查询计费策略 */
function expense_strategy_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/expense/strategy/find',
    ...opts
  })
}

/** 费用 获取计费策略 */
function expense_strategy_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/expense/strategy/get',
    ...opts
  })
}

/** 费用 修改计费策略 */
function expense_strategy_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/expense/strategy/update',
    ...opts
  })
}

/** 费用 设置计费策略状态 */
function expense_strategy_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/expense/strategy/set-status',
    ...opts
  })
}

/** 专车 新增专车下单区域 */
function private_car_order_area_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/private-car/order-area/create',
    ...opts
  })
}

/** 专车 查找专车下单区域 */
function private_car_order_area_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/private-car/order-area/find',
    ...opts
  })
}

/** 专车 设置专车下单区域状态 */
function private_car_order_area_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/private-car/order-area/set-status',
    ...opts
  })
}

/** 专车 获取专车下单区域 */
function private_car_order_area_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/private-car/order-area/get',
    ...opts
  })
}

/** 专车 修改专车下单区域 */
function private_car_order_area_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/private-car/order-area/update',
    ...opts
  })
}

/** 账户 创建 */
function account_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/create',
    ...opts
  })
}

/** 账户 更新 */
function account_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/update',
    ...opts
  })
}

/** 账户 登入 */
function account_login_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/login',
    ...opts
  })
}

/** 账户 注册 */
function account_register_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/register',
    ...opts
  })
}

/** 账户 重置密码 */
function account_reset_password_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/reset-password',
    ...opts
  })
}

/** 账户 设置密码 */
function account_set_password_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/set-password',
    ...opts
  })
}

/** 账户 登出 */
function account_logout_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/logout',
    ...opts
  })
}

/** 账户 查找 */
function account_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/find',
    ...opts
  })
}

/** 账户 添加角色 */
function account_add_role_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/add-role',
    ...opts
  })
}

/** 账户 更新角色 */
function account_update_role_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/update-role',
    ...opts
  })
}

/** 账户 查找角色 */
function account_find_role_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/find-role',
    ...opts
  })
}

/** 账户 查找日志 */
function account_find_log_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/account/find-log',
    ...opts
  })
}

/** 订单 查找 */
function order_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/order/find',
    ...opts
  })
}

/** 订单 提交取消原因 */
function order_submit_cancel_reason_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/order/submit-cancel-reason',
    ...opts
  })
}

/** 订单 获取 */
function order_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/order/get',
    ...opts
  })
}

/** 订单 派发 */
function order_dispatch_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/order/dispatch',
    ...opts
  })
}

/** 订单 取消 */
function order_cancel_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/order/cancel',
    ...opts
  })
}

/** 优惠券 查找 */
function coupon_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon/find',
    ...opts
  })
}

/** 优惠券 创建 */
function coupon_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon/create',
    ...opts
  })
}

/** 优惠券 更新 */
function coupon_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon/update',
    ...opts
  })
}

/** 优惠券 删除 */
function coupon_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon/delete',
    ...opts
  })
}

/** 优惠券 新增优惠券模板 */
function coupon_template_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon-template/create',
    ...opts
  })
}

/** 优惠券 修改优惠券模板 */
function coupon_template_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon-template/update',
    ...opts
  })
}

/** 优惠券 查询优惠券模板 */
function coupon_template_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon-template/find',
    ...opts
  })
}

/** 优惠券 删除优惠券模板 */
function coupon_template_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon-template/delete',
    ...opts
  })
}

/** 优惠券 获取优惠券模板 */
function coupon_template_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon-template/get',
    ...opts
  })
}

/** 优惠券 领取记录 */
function coupon_get_record_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon/get-record',
    ...opts
  })
}

/** 优惠券 使用记录 */
function coupon_use_record_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/coupon/use-record',
    ...opts
  })
}

/** 运营商 修改 */
function manager_operator_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/operator/update',
    ...opts
  })
}

/** 运营商 获取（运营商数量） */
function operator_get_count_get (opts?: AxiosRequestConfig) {
  return instance({
    method: 'get',
    url: '/api/v4/manager/operator/get-count',
    ...opts
  })
}

/** 运营商 查询（未分配层级运营商） */
function operator_unallocated_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/unallocated/find',
    ...opts
  })
}

/** 运营商 层级关系 */
function operator_hierarchy_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/hierarchy',
    ...opts
  })
}

/** 运营商 新建 */
function operator_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/create',
    ...opts
  })
}

/** 运营商 查询（单个运营商） */
function operator_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/get',
    ...opts
  })
}

/** 运营商 查询（运营商列表） */
function operator_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/find',
    ...opts
  })
}

/** 运营商 获取（未分配层级运营商数量） */
function operator_unallocated_count_get (opts?: AxiosRequestConfig) {
  return instance({
    method: 'get',
    url: '/api/v4/manager/operator/unallocated/count',
    ...opts
  })
}

/** 运营商 启用/停用 */
function operator_bizStatus_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/bizStatus/update',
    ...opts
  })
}

/** 运营商 设置运营信息 */
function operator_biz_info_set_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/biz-info/set',
    ...opts
  })
}

/** 运营商 设置订单策略 */
function operator_order_policy_set_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/order-policy/set',
    ...opts
  })
}

/** 运营商 创建发票规则 */
function manager_operator_invoice_rule_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/operator/invoice-rule/create',
    ...opts
  })
}

/** 运营商 修改发票规则 */
function manager_operator_invoice_rule_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/operator/invoice-rule/update',
    ...opts
  })
}

/** 运营商 设置发票规则状态 */
function manager_operator_invoice_rule_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/operator/invoice-rule/set-status',
    ...opts
  })
}

/** 运营商 获取（总公司） */
function organization_department_head_get_get (opts?: AxiosRequestConfig) {
  return instance({
    method: 'get',
    url: '/api/v4/manager/organization/department/head/get',
    ...opts
  })
}

/** 运营商 删除 */
function operator_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/delete',
    ...opts
  })
}

/** 运营商 创建派单规则 */
function operator_dispatch_rule_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/dispatch-rule/create',
    ...opts
  })
}

/** 运营商 更新派单规则 */
function operator_dispatch_rule_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/dispatch-rule/update',
    ...opts
  })
}

/** 运营商 获取派单规则 */
function operator_dispatch_rule_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/dispatch-rule/get',
    ...opts
  })
}

/** 运营商 删除派单规则 */
function operator_dispatch_rule_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/dispatch-rule/delete',
    ...opts
  })
}

/** 运营商 创建专车计价规则 */
function operator_private_e_rule_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/private-e-rule/create',
    ...opts
  })
}

/** 运营商 更新专车计价规则 */
function operator_private_e_rule_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/private-e-rule/update',
    ...opts
  })
}

/** 运营商 获取专车计价规则 */
function operator_private_e_rule_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/private-e-rule/get',
    ...opts
  })
}

/** 运营商 删除专车计价规则 */
function operator_private_e_rule_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/operator/private-e-rule/delete',
    ...opts
  })
}

/** 财务 查找司机账户 */
function finance_driver_accout_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/driver-accout/find',
    ...opts
  })
}

/** 财务 查找乘客账户 */
function finance_passenger_accout_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/passenger-accout/find',
    ...opts
  })
}

/** 财务 查找运营商账户 */
function finance_operator_accout_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/operator-accout/find',
    ...opts
  })
}

/** 财务 设置司机账户状态 */
function finance_driver_accout_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/driver-accout/set-status',
    ...opts
  })
}

/** 财务 设置运营商账户状态 */
function finance_operator_accout_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/operator-accout/set-status',
    ...opts
  })
}

/** 财务 查找订单支付 */
function finance_order_pay_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/order-pay/find',
    ...opts
  })
}

/** 财务 查找订单分润 */
function finance_profit_share_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/profit-share/find',
    ...opts
  })
}

/** 财务 查找司机提现 */
function finance_withdraw_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/withdraw/find',
    ...opts
  })
}

/** 财务 查找垫资请求 */
function finance_prepay_request_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/prepay-request/find',
    ...opts
  })
}

/** 财务 查找垫资审核 */
function finance_prepay_check_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/finance/prepay-check/find',
    ...opts
  })
}

/** 线路 创建 */
function line_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/create',
    ...opts
  })
}

/** 线路 线路配置 */
function line_config_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/config/update',
    ...opts
  })
}

/** 线路 状态设置 */
function line_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/set-status',
    ...opts
  })
}

/** 线路 获取线路配置 */
function line_get_config_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/get-config',
    ...opts
  })
}

/** 线路 关联司机 */
function line_driver_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/driver',
    ...opts
  })
}

/** 线路 设置审核状态 */
function line_set_audit_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/set-audit_status',
    ...opts
  })
}

/** 线路 更新 */
function line_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/update',
    ...opts
  })
}

/** 线路 删除 */
function user_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/user/delete',
    ...opts
  })
}

/** 线路 查找 */
function line_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/find',
    ...opts
  })
}

/** 线路 获取 */
function line_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/get',
    ...opts
  })
}

/** 线路 创建线路价格 */
function line_price_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-price/create',
    ...opts
  })
}

/** 线路 更新线路价格 */
function line_price_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-price/update',
    ...opts
  })
}

/** 线路 查找线路价格 */
function line_price_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-price/find',
    ...opts
  })
}

/** 线路 获取线路价格 */
function line_price_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-price/get',
    ...opts
  })
}

/** 线路 创建运营时间 */
function line_runtime_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-runtime/create',
    ...opts
  })
}

/** 线路 更新运营时间 */
function line_runtime_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-runtime/update',
    ...opts
  })
}

/** 线路 查找运营时间 */
function line_runtime_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-runtime/find',
    ...opts
  })
}

/** 线路 创建班次 */
function line_class_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-class/create',
    ...opts
  })
}

/** 线路 删除班次 */
function line_class_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-class/delete',
    ...opts
  })
}

/** 线路 查找班次 */
function line_class_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-class/find',
    ...opts
  })
}

/** 线路 获取班次 */
function line_class_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-class/get',
    ...opts
  })
}

/** 线路 创建上下车区域 */
function line_area_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-area/create',
    ...opts
  })
}

/** 线路 删除上下车区域 */
function line_area_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-area/delete',
    ...opts
  })
}

/** 线路 查找上下车区域 */
function line_area_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-area/find',
    ...opts
  })
}

/** 线路 更新上下车区域 */
function line_area_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-area/update',
    ...opts
  })
}

/** 线路 创建上下车点 */
function line_point_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-point/create',
    ...opts
  })
}

/** 线路 删除上下车点 */
function line_point_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-point/delete',
    ...opts
  })
}

/** 线路 更新上下车点 */
function line_point_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-point/update',
    ...opts
  })
}

/** 线路 查找上下车点 */
function line_point_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-point/find',
    ...opts
  })
}

/** 线路 添加司机 */
function line_driver_add_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-driver/add',
    ...opts
  })
}

/** 线路 移除司机 */
function line_driver_remove_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-driver/remove',
    ...opts
  })
}

/** 线路 查找司机 */
function line_driver_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-driver/find',
    ...opts
  })
}

/** 线路 获取司机 */
function line_driver_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-driver/get',
    ...opts
  })
}

/** 线路 创建模板 */
function line_template_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/create',
    ...opts
  })
}

/** 线路 更新模板 */
function line_template_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/update',
    ...opts
  })
}

/** 线路 设置模板状态 */
function line_template_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/set-status',
    ...opts
  })
}

/** 线路 删除模板 */
function line_template_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/delete',
    ...opts
  })
}

/** 线路 查找模板 */
function line_template_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/find',
    ...opts
  })
}

/** 线路 添加模板 */
function line_add_template_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/add-template',
    ...opts
  })
}

/** 线路 获取模板 */
function line_get_template_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line/get-template',
    ...opts
  })
}

/** 线路 创建拼单规则 */
function line_template_merge_rule_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/merge-rule/create',
    ...opts
  })
}

/** 线路 获取拼单规则 */
function line_template_merge_rule_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/merge-rule/get',
    ...opts
  })
}

/** 线路 创建抢单规则 */
function line_template_grab_rule_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/grab-rule/create',
    ...opts
  })
}

/** 线路 获取抢单规则 */
function line_template_grab_rule_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/grab-rule/get',
    ...opts
  })
}

/** 线路 创建派单规则 */
function line_template_dispatch_rule_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/dispatch-rule/create',
    ...opts
  })
}

/** 线路 获取派单规则 */
function line_template_dispatch_rule_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-template/dispatch-rule/get',
    ...opts
  })
}

/** 线路 创建分段价格 */
function line_remote_transfer_section_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-remote-transfer/section/create',
    ...opts
  })
}

/** 线路 删除分段价格 */
function line_remote_transfer_section_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-remote-transfer/section/delete',
    ...opts
  })
}

/** 线路 更新分段价格 */
function line_remote_transfer_section_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-remote-transfer/section/update',
    ...opts
  })
}

/** 线路 查找分段价格 */
function line_remote_transfer_section_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/line-remote-transfer/section/find',
    ...opts
  })
}

/** 司机 查询 */
function driver_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/find',
    ...opts
  })
}

/** 司机 启用/停用 */
function driver_set_enable_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/set-enable-status',
    ...opts
  })
}

/** 司机 审核记录（查询审核记录） */
function driver_check_record_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/check-record/find',
    ...opts
  })
}

/** 司机 判断是否绑定车辆 */
function driver_check_bind_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/check-bind',
    ...opts
  })
}

/** 司机 车辆绑定 */
function driver_bind_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/bind',
    ...opts
  })
}

/** 司机 新增 */
function driver_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/create',
    ...opts
  })
}

/** 司机 车辆解绑 */
function driver_unbind_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/unbind',
    ...opts
  })
}

/** 司机 提交 */
function driver_submit_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/submit',
    ...opts
  })
}

/** 司机 编辑（更新司机） */
function driver_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/update',
    ...opts
  })
}

/** 司机 查询黑名单列表 */
function driver_find_blacklist_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/find-blacklist',
    ...opts
  })
}

/** 司机 添加黑名单 */
function driver_blacklist_add_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/blacklist/add',
    ...opts
  })
}

/** 司机 移除黑名单 */
function driver_blacklist_remove_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/blacklist/remove',
    ...opts
  })
}

/** 司机 获取 */
function driver_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/get',
    ...opts
  })
}

/** 司机 审核（通过/不通过） */
function driver_validate_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/driver/validate',
    ...opts
  })
}

/** 组织 创建运营区 */
function organization_biz_area_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/biz-area/create',
    ...opts
  })
}

/** 组织 删除运营区 */
function organization_biz_area_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/biz-area/delete',
    ...opts
  })
}

/** 组织 创建管理区 */
function organization_admin_area_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/admin-area/create',
    ...opts
  })
}

/** 组织 删除管理区 */
function organization_admin_area_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/admin-area/delete',
    ...opts
  })
}

/** 组织 添加运营商（到管理区） */
function organization_admin_area_add_operator_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/admin-area/add-operator',
    ...opts
  })
}

/** 组织 移除运营商（从管理区） */
function organization_admin_area_remove_operator_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/admin-area/remove-operator',
    ...opts
  })
}

/** 组织 创建部门 */
function organization_department_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/department/create',
    ...opts
  })
}

/** 组织 删除部门 */
function organization_department_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/department/delete',
    ...opts
  })
}

/** 组织 添加运营商（到部门） */
function organization_department_add_operator_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/department/add-operator',
    ...opts
  })
}

/** 组织 移除运营商（从部门） */
function organization_department_remove_operator_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/department/remove-operator',
    ...opts
  })
}

/** 组织 查找运营区 */
function organization_biz_area_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/biz-area/find',
    ...opts
  })
}

/** 组织 查找管理区 */
function organization_admin_area_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/admin-area/find',
    ...opts
  })
}

/** 组织 查找部门 */
function organization_department_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/department/find',
    ...opts
  })
}

/** 组织 查找子部门 */
function manager_organization_department_find_child_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/organization/department/find-child',
    ...opts
  })
}

/** 组织 获取总公司信息 */
function organization_department_head_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/organization/department/head/get',
    ...opts
  })
}

/** 组织 获取分公司 */
function manager_organization_department_branch_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/organization/department/branch/get',
    ...opts
  })
}

/** 组织 获取部门详情 */
function manager_organization_department_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/organization/department/get',
    ...opts
  })
}

/** 乘客 查找 */
function passenger_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/passenger/find',
    ...opts
  })
}

/** 乘客 查找登录日志 */
function passenger_login_log_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/passenger/login-log/find',
    ...opts
  })
}

/** 乘客 查找行程 */
function passenger_trip_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/passenger/trip/find',
    ...opts
  })
}

/** 乘客 获取行程 */
function passenger_trip_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/passenger/trip/get',
    ...opts
  })
}

/** 车辆 创建（新增车辆） */
function car_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/create',
    ...opts
  })
}

/** 车辆 查找审核记录 */
function car_check_record_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/check-record/find',
    ...opts
  })
}

/** 车辆 查找事故记录 */
function car_accident_record_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/accident-record/find',
    ...opts
  })
}

/** 车辆 创建事故记录 */
function car_accident_record_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/accident-record/create',
    ...opts
  })
}

/** 车辆 获取事故记录 */
function car_accident_record_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/accident-record/get',
    ...opts
  })
}

/** 车辆 更新事故记录 */
function car_accident_record_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/accident-record/update',
    ...opts
  })
}

/** 车辆 删除事故记录 */
function car_accident_record_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/accident-record/delete',
    ...opts
  })
}

/** 车辆 启运/停运 */
function car_set_biz_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/set-biz-status',
    ...opts
  })
}

/** 车辆 查询车辆列表 */
function car_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/find',
    ...opts
  })
}

/** 车辆 查找保险记录 */
function car_insurance_record_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/insurance-record/find',
    ...opts
  })
}

/** 车辆 创建保险记录 */
function car_insurance_record_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/insurance-record/create',
    ...opts
  })
}

/** 车辆 获取保险记录 */
function car_insurance_record_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/insurance-record/get',
    ...opts
  })
}

/** 车辆 更新保险记录 */
function car_insurance_record_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/insurance-record/update',
    ...opts
  })
}

/** 车辆 删除保险记录 */
function car_insurance_record_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/insurance-record/delete',
    ...opts
  })
}

/** 车辆 查找维修记录 */
function car_maintain_record_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/maintain-record/find',
    ...opts
  })
}

/** 车辆 创建维修记录 */
function car_maintain_record_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/maintain-record/create',
    ...opts
  })
}

/** 车辆 获取维修记录 */
function car_maintain_record_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/maintain-record/get',
    ...opts
  })
}

/** 车辆 更新维修记录 */
function car_maintain_record_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/maintain-record/update',
    ...opts
  })
}

/** 车辆 删除维修记录 */
function car_maintain_record_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/maintain-record/delete',
    ...opts
  })
}

/** 车辆 提交 */
function car_submit_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/submit',
    ...opts
  })
}

/** 车辆 获取运营状态 */
function car_biz_status_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/biz-status/get',
    ...opts
  })
}

/** 车辆 审核运营状态 */
function car_biz_status_validate_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/biz-status/validate',
    ...opts
  })
}

/** 车辆 编辑（更新车辆） */
function car_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/update',
    ...opts
  })
}

/** 车辆 获取车辆详情 */
function car_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/get',
    ...opts
  })
}

/** 车辆 审核（通过/不通过） */
function car_validate_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/car/validate',
    ...opts
  })
}

/** 战略 创建运营商等级 */
function strategy_operator_grade_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/create',
    ...opts
  })
}

/** 战略 获取运营商等级（不分页） */
function strategy_operator_grade_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/get',
    ...opts
  })
}

/** 战略 获取运营模式(不分页) */
function strategy_biz_mode_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/biz-mode/get',
    ...opts
  })
}

/** 战略 创建业务类型 */
function strategy_business_type_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/business-type/create',
    ...opts
  })
}

/** 战略 查找等级模板列表 */
function strategy_grade_temple_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/grade-temple/find',
    ...opts
  })
}

/** 战略 获取等级模板 */
function strategy_grade_temple_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/grade-temple/get',
    ...opts
  })
}

/** 战略 添加等级模板 */
function strategy_grade_temple_add_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/grade-temple/add',
    ...opts
  })
}

/** 战略 更新等级模板 */
function strategy_grade_temple_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/grade-temple/update',
    ...opts
  })
}

/** 战略 查找运营商等级 */
function strategy_operator_grade_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/find',
    ...opts
  })
}

/** 战略 删除运营商等级 */
function strategy_operator_grade_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/delete',
    ...opts
  })
}

/** 战略 添加结算方式（到运营商等级） */
function strategy_operator_grade_add_settle_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/add-settle-mode',
    ...opts
  })
}

/** 战略 获取结算方式 */
function strategy_operator_grade_get_settle_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/get-settle-mode',
    ...opts
  })
}

/** 战略 移除结算方式（从运营商等级） */
function strategy_operator_grade_remove_settle_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/remove-settle-mode',
    ...opts
  })
}

/** 战略 添加对开线路派单方式（到运营商等级） */
function strategy_operator_grade_add_dispatch_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/add-dispatch-mode',
    ...opts
  })
}

/** 战略 获取对开线路派单方式 */
function strategy_operator_grade_get_dispatch_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/get-dispatch-mode',
    ...opts
  })
}

/** 战略 移除对开线路派单方式（从运营商等级） */
function strategy_operator_grade_remove_dispatch_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/remove-dispatch-mode',
    ...opts
  })
}

/** 战略 添加分润方式（到运营商等级） */
function strategy_operator_grade_add_profit_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/add-profit-mode',
    ...opts
  })
}

/** 战略 查找分润方式 */
function strategy_operator_grade_find_profit_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/find-profit-mode',
    ...opts
  })
}

/** 战略 移除分润方式（从运营商等级） */
function strategy_operator_grade_remove_profit_mode_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/operator-grade/remove-profit-mode',
    ...opts
  })
}

/** 战略 创建对开线路派单原则 */
function strategy_order_dispatch_principle_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/order-dispatch-principle/create',
    ...opts
  })
}

/** 战略 查找对开线路派单原则 */
function strategy_order_dispatch_principle_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/order-dispatch-principle/find',
    ...opts
  })
}

/** 战略 创建运营模式 */
function strategy_biz_mode_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/biz-mode/create',
    ...opts
  })
}

/** 战略 查找运营模式 */
function strategy_biz_mode_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/biz-mode/find',
    ...opts
  })
}

/** 战略 创建分润成员类型 */
function strategy_profit_member_type_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/profit-member-type/create',
    ...opts
  })
}

/** 战略 查找分润成员类型 */
function strategy_profit_member_type_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/profit-member-type/find',
    ...opts
  })
}

/** 战略 创建支付方式 */
function strategy_pay_mode_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/pay-mode/create',
    ...opts
  })
}

/** 战略 查找支付方式 */
function api_v4_boss_strategy_pay_mode_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/api/v4/boss/strategy/pay-mode/find',
    ...opts
  })
}

/** 战略 创建分润规则 */
function strategy_profit_rule_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/profit-rule/create',
    ...opts
  })
}

/** 战略 查找分润规则 */
function strategy_profit_rule_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/profit-rule/find',
    ...opts
  })
}

/** 战略 删除分润规则 */
function strategy_profit_rule_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/profit-rule/delete',
    ...opts
  })
}

/** 战略 更新分润规则 */
function strategy_profit_rule_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/strategy/profit-rule/update',
    ...opts
  })
}

/** 系统 创建节日 */
function system_holiday_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/holiday/create',
    ...opts
  })
}

/** 系统 更新节日 */
function system_holiday_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/holiday/update',
    ...opts
  })
}

/** 系统 删除节日 */
function system_holiday_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/holiday/delete',
    ...opts
  })
}

/** 系统 查找节日 */
function system_holiday_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/holiday/find',
    ...opts
  })
}

/** 系统 创建数据字典 */
function system_option_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/option/create',
    ...opts
  })
}

/** 系统 更新数据字典 */
function system_option_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/option/update',
    ...opts
  })
}

/** 系统 删除数据字典 */
function system_option_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/option/delete',
    ...opts
  })
}

/** 系统 创建资源 */
function system_resource_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/resource/create',
    ...opts
  })
}

/** 系统 查找数据字典 */
function system_option_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/option/find',
    ...opts
  })
}

/** 系统 更新资源 */
function system_resource_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/resource/update',
    ...opts
  })
}

/** 系统 删除资源 */
function system_resource_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/resource/delete',
    ...opts
  })
}

/** 系统 查找资源 */
function system_resource_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/resource/find',
    ...opts
  })
}

/** 系统 创建角色 */
function system_role_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/role/create',
    ...opts
  })
}

/** 系统 更新角色 */
function system_role_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/role/update',
    ...opts
  })
}

/** 系统 删除角色 */
function system_role_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/role/delete',
    ...opts
  })
}

/** 系统 查找角色 */
function system_role_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/role/find',
    ...opts
  })
}

/** 系统 添加角色资源 */
function system_role_add_resource_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/role/add-resource',
    ...opts
  })
}

/** 系统 更新角色资源 */
function system_role_update_resource_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/role/update-resource',
    ...opts
  })
}

/** 系统 查找角色资源 */
function system_role_find_resource_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/system/role/find-resource',
    ...opts
  })
}

/** 商城 设置套餐 */
function manager_mall_order_add_product_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/mall/order/add-product',
    ...opts
  })
}

/** 商城 创建产品订单 */
function manager_mall_order_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/manager/mall/order/create',
    ...opts
  })
}

/** 商城 创建产品 */
function mall_product_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/product/create',
    ...opts
  })
}

/** 商城 删除产品 */
function mall_product_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/product/delete',
    ...opts
  })
}

/** 商城 更新产品 */
function mall_product_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/product/update',
    ...opts
  })
}

/** 商城 查找产品 */
function mall_product_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/product/find',
    ...opts
  })
}

/** 商城 查找产品订单 */
function mall_order_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/order/find',
    ...opts
  })
}

/** 商城 查找支付记录 */
function mall_payRecord_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/payRecord/find',
    ...opts
  })
}

/** 商城 获取产品订单 */
function mall_order_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/order/get',
    ...opts
  })
}

/** 商城 产品订单修改 */
function mall_order_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/order/update',
    ...opts
  })
}

/** 商城 修改支付状态 */
function mall_payRecord_updateStatus_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/payRecord/updateStatus',
    ...opts
  })
}

/** 商城 查找购买记录 */
function mall_buy_record_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/buy/record/find',
    ...opts
  })
}

/** 商城 获取购买记录 */
function mall_buy_record_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/buy/record/get',
    ...opts
  })
}

/** 商城 获取车辆购买记录 */
function mall_buy_record_get_carBuyRecord_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/buy/record/get-carBuyRecord',
    ...opts
  })
}

/** 商城 更新产品销售数量 */
function product_update_state_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/product/update-state',
    ...opts
  })
}

/** 商城 产品状态设置 */
function product_status_set_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/product/status/set',
    ...opts
  })
}

/** 商城 修改产品 */
function mall_payRecord_set_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/mall/payRecord/set-status',
    ...opts
  })
}

/** 活动 新增 */
function activity_create_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/create',
    ...opts
  })
}

/** 活动 券配置 */
function activity_set_coupon_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/set-coupon',
    ...opts
  })
}

/** 活动 查找 */
function activity_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/find',
    ...opts
  })
}

/** 活动 修改 */
function activity_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/update',
    ...opts
  })
}

/** 活动 删除 */
function activity_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/delete',
    ...opts
  })
}

/** 活动 查找活动列表 */
function activity_management_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/management',
    ...opts
  })
}

/** 活动 申请 */
function activity_apply_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/apply',
    ...opts
  })
}

/** 活动 修改运营商活动审核状态 */
function activity_update_check_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/update-check-status',
    ...opts
  })
}

/** 活动 修改运营商活动上线状态 */
function activity_update_online_status_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/update-online-status',
    ...opts
  })
}

/** 活动 获取 */
function activity_get_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/get',
    ...opts
  })
}

/** 活动 自定义活动 */
function activity_user_defined_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/user-defined',
    ...opts
  })
}

/** 活动 修改运营商活动 */
function activity_operator_update_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity-operator/update',
    ...opts
  })
}

/** 活动 删除活动运营商 */
function activity_operator_delete_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity-operator/delete',
    ...opts
  })
}

/** 活动 复制 */
function activity_copy_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/activity/copy',
    ...opts
  })
}

/** 行政区 查找 */
function region_find_post (opts?: AxiosRequestConfig) {
  return instance({
    method: 'post',
    url: '/api/v4/manager/region/find',
    ...opts
  })
}

export {
  common_post,
  file_upload_post,
  file_image_get_post,
  expense_strategy_create_post,
  expense_strategy_find_post,
  expense_strategy_get_post,
  expense_strategy_update_post,
  expense_strategy_set_status_post,
  private_car_order_area_create_post,
  private_car_order_area_find_post,
  private_car_order_area_set_status_post,
  private_car_order_area_get_post,
  private_car_order_area_update_post,
  account_create_post,
  account_update_post,
  account_login_post,
  account_register_post,
  account_reset_password_post,
  account_set_password_post,
  account_logout_post,
  account_find_post,
  account_add_role_post,
  account_update_role_post,
  account_find_role_post,
  account_find_log_post,
  order_find_post,
  order_submit_cancel_reason_post,
  order_get_post,
  order_dispatch_post,
  order_cancel_post,
  coupon_find_post,
  coupon_create_post,
  coupon_update_post,
  coupon_delete_post,
  coupon_template_create_post,
  coupon_template_update_post,
  coupon_template_find_post,
  coupon_template_delete_post,
  coupon_template_get_post,
  coupon_get_record_post,
  coupon_use_record_post,
  manager_operator_update_post,
  operator_get_count_get,
  operator_unallocated_find_post,
  operator_hierarchy_post,
  operator_create_post,
  operator_get_post,
  operator_find_post,
  operator_unallocated_count_get,
  operator_bizStatus_update_post,
  operator_biz_info_set_post,
  operator_order_policy_set_post,
  manager_operator_invoice_rule_create_post,
  manager_operator_invoice_rule_update_post,
  manager_operator_invoice_rule_set_status_post,
  organization_department_head_get_get,
  operator_delete_post,
  operator_dispatch_rule_create_post,
  operator_dispatch_rule_update_post,
  operator_dispatch_rule_get_post,
  operator_dispatch_rule_delete_post,
  operator_private_e_rule_create_post,
  operator_private_e_rule_update_post,
  operator_private_e_rule_get_post,
  operator_private_e_rule_delete_post,
  finance_driver_accout_find_post,
  finance_passenger_accout_find_post,
  finance_operator_accout_find_post,
  finance_driver_accout_set_status_post,
  finance_operator_accout_set_status_post,
  finance_order_pay_find_post,
  finance_profit_share_find_post,
  finance_withdraw_find_post,
  finance_prepay_request_find_post,
  finance_prepay_check_find_post,
  line_create_post,
  line_config_update_post,
  line_set_status_post,
  line_get_config_post,
  line_driver_post,
  line_set_audit_status_post,
  line_update_post,
  user_delete_post,
  line_find_post,
  line_get_post,
  line_price_create_post,
  line_price_update_post,
  line_price_find_post,
  line_price_get_post,
  line_runtime_create_post,
  line_runtime_update_post,
  line_runtime_find_post,
  line_class_create_post,
  line_class_delete_post,
  line_class_find_post,
  line_class_get_post,
  line_area_create_post,
  line_area_delete_post,
  line_area_find_post,
  line_area_update_post,
  line_point_create_post,
  line_point_delete_post,
  line_point_update_post,
  line_point_find_post,
  line_driver_add_post,
  line_driver_remove_post,
  line_driver_find_post,
  line_driver_get_post,
  line_template_create_post,
  line_template_update_post,
  line_template_set_status_post,
  line_template_delete_post,
  line_template_find_post,
  line_add_template_post,
  line_get_template_post,
  line_template_merge_rule_create_post,
  line_template_merge_rule_get_post,
  line_template_grab_rule_create_post,
  line_template_grab_rule_get_post,
  line_template_dispatch_rule_create_post,
  line_template_dispatch_rule_get_post,
  line_remote_transfer_section_create_post,
  line_remote_transfer_section_delete_post,
  line_remote_transfer_section_update_post,
  line_remote_transfer_section_find_post,
  driver_find_post,
  driver_set_enable_status_post,
  driver_check_record_find_post,
  driver_check_bind_post,
  driver_bind_post,
  driver_create_post,
  driver_unbind_post,
  driver_submit_post,
  driver_update_post,
  driver_find_blacklist_post,
  driver_blacklist_add_post,
  driver_blacklist_remove_post,
  driver_get_post,
  driver_validate_post,
  organization_biz_area_create_post,
  organization_biz_area_delete_post,
  organization_admin_area_create_post,
  organization_admin_area_delete_post,
  organization_admin_area_add_operator_post,
  organization_admin_area_remove_operator_post,
  organization_department_create_post,
  organization_department_delete_post,
  organization_department_add_operator_post,
  organization_department_remove_operator_post,
  organization_biz_area_find_post,
  organization_admin_area_find_post,
  organization_department_find_post,
  manager_organization_department_find_child_post,
  organization_department_head_get_post,
  manager_organization_department_branch_get_post,
  manager_organization_department_get_post,
  passenger_find_post,
  passenger_login_log_find_post,
  passenger_trip_find_post,
  passenger_trip_get_post,
  car_create_post,
  car_check_record_find_post,
  car_accident_record_find_post,
  car_accident_record_create_post,
  car_accident_record_get_post,
  car_accident_record_update_post,
  car_accident_record_delete_post,
  car_set_biz_status_post,
  car_find_post,
  car_insurance_record_find_post,
  car_insurance_record_create_post,
  car_insurance_record_get_post,
  car_insurance_record_update_post,
  car_insurance_record_delete_post,
  car_maintain_record_find_post,
  car_maintain_record_create_post,
  car_maintain_record_get_post,
  car_maintain_record_update_post,
  car_maintain_record_delete_post,
  car_submit_post,
  car_biz_status_get_post,
  car_biz_status_validate_post,
  car_update_post,
  car_get_post,
  car_validate_post,
  strategy_operator_grade_create_post,
  strategy_operator_grade_get_post,
  strategy_biz_mode_get_post,
  strategy_business_type_create_post,
  strategy_grade_temple_find_post,
  strategy_grade_temple_get_post,
  strategy_grade_temple_add_post,
  strategy_grade_temple_update_post,
  strategy_operator_grade_find_post,
  strategy_operator_grade_delete_post,
  strategy_operator_grade_add_settle_mode_post,
  strategy_operator_grade_get_settle_mode_post,
  strategy_operator_grade_remove_settle_mode_post,
  strategy_operator_grade_add_dispatch_mode_post,
  strategy_operator_grade_get_dispatch_mode_post,
  strategy_operator_grade_remove_dispatch_mode_post,
  strategy_operator_grade_add_profit_mode_post,
  strategy_operator_grade_find_profit_mode_post,
  strategy_operator_grade_remove_profit_mode_post,
  strategy_order_dispatch_principle_create_post,
  strategy_order_dispatch_principle_find_post,
  strategy_biz_mode_create_post,
  strategy_biz_mode_find_post,
  strategy_profit_member_type_create_post,
  strategy_profit_member_type_find_post,
  strategy_pay_mode_create_post,
  api_v4_boss_strategy_pay_mode_find_post,
  strategy_profit_rule_create_post,
  strategy_profit_rule_find_post,
  strategy_profit_rule_delete_post,
  strategy_profit_rule_update_post,
  system_holiday_create_post,
  system_holiday_update_post,
  system_holiday_delete_post,
  system_holiday_find_post,
  system_option_create_post,
  system_option_update_post,
  system_option_delete_post,
  system_resource_create_post,
  system_option_find_post,
  system_resource_update_post,
  system_resource_delete_post,
  system_resource_find_post,
  system_role_create_post,
  system_role_update_post,
  system_role_delete_post,
  system_role_find_post,
  system_role_add_resource_post,
  system_role_update_resource_post,
  system_role_find_resource_post,
  manager_mall_order_add_product_post,
  manager_mall_order_create_post,
  mall_product_create_post,
  mall_product_delete_post,
  mall_product_update_post,
  mall_product_find_post,
  mall_order_find_post,
  mall_payRecord_find_post,
  mall_order_get_post,
  mall_order_update_post,
  mall_payRecord_updateStatus_post,
  mall_buy_record_find_post,
  mall_buy_record_get_post,
  mall_buy_record_get_carBuyRecord_post,
  product_update_state_post,
  product_status_set_post,
  mall_payRecord_set_status_post,
  activity_create_post,
  activity_set_coupon_post,
  activity_find_post,
  activity_update_post,
  activity_delete_post,
  activity_management_post,
  activity_apply_post,
  activity_update_check_status_post,
  activity_update_online_status_post,
  activity_get_post,
  activity_user_defined_post,
  activity_operator_update_post,
  activity_operator_delete_post,
  activity_copy_post,
  region_find_post
}