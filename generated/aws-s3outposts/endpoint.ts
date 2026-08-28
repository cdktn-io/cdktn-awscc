// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The type of access for the on-premise network connectivity for the Outpost endpoint. To access endpoint from an on-premises network, you must specify the access type and provide the customer owned Ipv4 pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#access_type CcEndpoint#access_type}
    */
    readonly accessType?: string;
    /**
    * The ID of the customer-owned IPv4 pool for the Endpoint. IP addresses will be allocated from this pool for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#customer_owned_ipv_4_pool CcEndpoint#customer_owned_ipv_4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * The failure reason, if any, for a create or delete endpoint operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#failed_reason CcEndpoint#failed_reason}
    */
    readonly failedReason?: CcEndpoint.FailedReasonProperty;
    /**
    * The id of the customer outpost on which the bucket resides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#outpost_id CcEndpoint#outpost_id}
    */
    readonly outpostId: string;
    /**
    * The ID of the security group to use with the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#security_group_id CcEndpoint#security_group_id}
    */
    readonly securityGroupId: string;
    /**
    * The ID of the subnet in the selected VPC. The subnet must belong to the Outpost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#subnet_id CcEndpoint#subnet_id}
    */
    readonly subnetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint awscc_s3outposts_endpoint}
*/
export class CcEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3outposts_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpoint to import
    * @param importFromId The id of the existing CcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3outposts_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint awscc_s3outposts_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3outposts_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accessType = config.accessType;
        this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
        this._failedReason.internalValue = config.failedReason;
        this._outpostId = config.outpostId;
        this._securityGroupId = config.securityGroupId;
        this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_type - computed: true, optional: true, required: false
    private _accessType?: string; 
    public get accessType() {
        return this.getStringAttribute('access_type');
    }
    public set accessType(value: string) {
        this._accessType = value;
    }
    public resetAccessType() {
        this._accessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTypeInput() {
        return this._accessType;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // customer_owned_ipv_4_pool - computed: true, optional: true, required: false
    private _customerOwnedIpv4Pool?: string; 
    public get customerOwnedIpv4Pool() {
        return this.getStringAttribute('customer_owned_ipv_4_pool');
    }
    public set customerOwnedIpv4Pool(value: string) {
        this._customerOwnedIpv4Pool = value;
    }
    public resetCustomerOwnedIpv4Pool() {
        this._customerOwnedIpv4Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerOwnedIpv4PoolInput() {
        return this._customerOwnedIpv4Pool;
    }

    // endpoint_id - computed: true, optional: false, required: false
    public get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }

    // failed_reason - computed: true, optional: true, required: false
    private _failedReason = new CcEndpoint.FailedReasonPropertyOutputReference(this, "failed_reason");
    public get failedReason() {
        return this._failedReason;
    }
    public putFailedReason(value: CcEndpoint.FailedReasonProperty) {
        this._failedReason.internalValue = value;
    }
    public resetFailedReason() {
        this._failedReason.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failedReasonInput() {
        return this._failedReason.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // network_interfaces - computed: true, optional: false, required: false
    private _networkInterfaces = new CcEndpoint.NetworkInterfacesPropertyList(this, "network_interfaces", true);
    public get networkInterfaces() {
        return this._networkInterfaces;
    }

    // outpost_id - computed: false, optional: false, required: true
    private _outpostId?: string; 
    public get outpostId() {
        return this.getStringAttribute('outpost_id');
    }
    public set outpostId(value: string) {
        this._outpostId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostIdInput() {
        return this._outpostId;
    }

    // security_group_id - computed: false, optional: false, required: true
    private _securityGroupId?: string; 
    public get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
    public set securityGroupId(value: string) {
        this._securityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdInput() {
        return this._securityGroupId;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_type: cdktn.stringToTerraform(this._accessType),
            customer_owned_ipv_4_pool: cdktn.stringToTerraform(this._customerOwnedIpv4Pool),
            failed_reason: ccEndpointFailedReasonPropertyToTerraform(this._failedReason.internalValue),
            outpost_id: cdktn.stringToTerraform(this._outpostId),
            security_group_id: cdktn.stringToTerraform(this._securityGroupId),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_type: {
                value: cdktn.stringToHclTerraform(this._accessType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_owned_ipv_4_pool: {
                value: cdktn.stringToHclTerraform(this._customerOwnedIpv4Pool),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            failed_reason: {
                value: ccEndpointFailedReasonPropertyToHclTerraform(this._failedReason.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.FailedReasonProperty",
            },
            outpost_id: {
                value: cdktn.stringToHclTerraform(this._outpostId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_id: {
                value: cdktn.stringToHclTerraform(this._securityGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEndpointFailedReasonPropertyToTerraform(struct?: CcEndpoint.FailedReasonProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_code: cdktn.stringToTerraform(struct!.errorCode),
        message: cdktn.stringToTerraform(struct!.message),
    }
}


export function ccEndpointFailedReasonPropertyToHclTerraform(struct?: CcEndpoint.FailedReasonProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_code: {
            value: cdktn.stringToHclTerraform(struct!.errorCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message: {
            value: cdktn.stringToHclTerraform(struct!.message),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointNetworkInterfacesPropertyToTerraform(struct?: CcEndpoint.NetworkInterfacesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccEndpointNetworkInterfacesPropertyToHclTerraform(struct?: CcEndpoint.NetworkInterfacesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcEndpoint {
export interface FailedReasonProperty {
    /**
    * The failure code, if any, for a create or delete endpoint operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#error_code CcEndpoint#error_code}
    */
    readonly errorCode?: string;
    /**
    * Additional error details describing the endpoint failure and recommended action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3outposts_endpoint#message CcEndpoint#message}
    */
    readonly message?: string;
}
export class FailedReasonPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FailedReasonProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorCode = this._errorCode;
        }
        if (this._message !== undefined) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FailedReasonProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorCode = undefined;
            this._message = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorCode = value.errorCode;
            this._message = value.message;
        }
    }

    // error_code - computed: true, optional: true, required: false
    private _errorCode?: string; 
    public get errorCode() {
        return this.getStringAttribute('error_code');
    }
    public set errorCode(value: string) {
        this._errorCode = value;
    }
    public resetErrorCode() {
        this._errorCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorCodeInput() {
        return this._errorCode;
    }

    // message - computed: true, optional: true, required: false
    private _message?: string; 
    public get message() {
        return this.getStringAttribute('message');
    }
    public set message(value: string) {
        this._message = value;
    }
    public resetMessage() {
        this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
        return this._message;
    }
}
export interface NetworkInterfacesProperty {
}
export class NetworkInterfacesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): NetworkInterfacesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfacesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
}

export class NetworkInterfacesPropertyList extends cdktn.ComplexList {

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): NetworkInterfacesPropertyOutputReference {
        return new NetworkInterfacesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
