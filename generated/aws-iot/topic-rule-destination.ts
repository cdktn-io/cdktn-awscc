// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTopicRuleDestinationProps extends cdktn.TerraformMetaArguments {
    /**
    * HTTP URL destination properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#http_url_properties CcTopicRuleDestination#http_url_properties}
    */
    readonly httpUrlProperties?: CcTopicRuleDestination.HttpUrlDestinationSummaryProperty;
    /**
    * The status of the TopicRuleDestination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#status CcTopicRuleDestination#status}
    */
    readonly status?: string;
    /**
    * VPC destination properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#vpc_properties CcTopicRuleDestination#vpc_properties}
    */
    readonly vpcProperties?: CcTopicRuleDestination.VpcDestinationPropertiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination awscc_iot_topic_rule_destination}
*/
export class CcTopicRuleDestination extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_topic_rule_destination";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTopicRuleDestination resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTopicRuleDestination to import
    * @param importFromId The id of the existing CcTopicRuleDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTopicRuleDestination to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_topic_rule_destination", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination awscc_iot_topic_rule_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTopicRuleDestinationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTopicRuleDestinationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_topic_rule_destination',
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
        this._httpUrlProperties.internalValue = config.httpUrlProperties;
        this._status = config.status;
        this._vpcProperties.internalValue = config.vpcProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // http_url_properties - computed: true, optional: true, required: false
    private _httpUrlProperties = new CcTopicRuleDestination.HttpUrlDestinationSummaryPropertyOutputReference(this, "http_url_properties");
    public get httpUrlProperties() {
        return this._httpUrlProperties;
    }
    public putHttpUrlProperties(value: CcTopicRuleDestination.HttpUrlDestinationSummaryProperty) {
        this._httpUrlProperties.internalValue = value;
    }
    public resetHttpUrlProperties() {
        this._httpUrlProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpUrlPropertiesInput() {
        return this._httpUrlProperties.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
        return this.getStringAttribute('status_reason');
    }

    // vpc_properties - computed: true, optional: true, required: false
    private _vpcProperties = new CcTopicRuleDestination.VpcDestinationPropertiesPropertyOutputReference(this, "vpc_properties");
    public get vpcProperties() {
        return this._vpcProperties;
    }
    public putVpcProperties(value: CcTopicRuleDestination.VpcDestinationPropertiesProperty) {
        this._vpcProperties.internalValue = value;
    }
    public resetVpcProperties() {
        this._vpcProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPropertiesInput() {
        return this._vpcProperties.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            http_url_properties: ccTopicRuleDestinationHttpUrlDestinationSummaryPropertyToTerraform(this._httpUrlProperties.internalValue),
            status: cdktn.stringToTerraform(this._status),
            vpc_properties: ccTopicRuleDestinationVpcDestinationPropertiesPropertyToTerraform(this._vpcProperties.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            http_url_properties: {
                value: ccTopicRuleDestinationHttpUrlDestinationSummaryPropertyToHclTerraform(this._httpUrlProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTopicRuleDestination.HttpUrlDestinationSummaryProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_properties: {
                value: ccTopicRuleDestinationVpcDestinationPropertiesPropertyToHclTerraform(this._vpcProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTopicRuleDestination.VpcDestinationPropertiesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTopicRuleDestinationHttpUrlDestinationSummaryPropertyToTerraform(struct?: CcTopicRuleDestination.HttpUrlDestinationSummaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
    }
}


export function ccTopicRuleDestinationHttpUrlDestinationSummaryPropertyToHclTerraform(struct?: CcTopicRuleDestination.HttpUrlDestinationSummaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        confirmation_url: {
            value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleDestinationVpcDestinationPropertiesPropertyToTerraform(struct?: CcTopicRuleDestination.VpcDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccTopicRuleDestinationVpcDestinationPropertiesPropertyToHclTerraform(struct?: CcTopicRuleDestination.VpcDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTopicRuleDestination {
export interface HttpUrlDestinationSummaryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#confirmation_url CcTopicRuleDestination#confirmation_url}
    */
    readonly confirmationUrl?: string;
}
export class HttpUrlDestinationSummaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpUrlDestinationSummaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._confirmationUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.confirmationUrl = this._confirmationUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpUrlDestinationSummaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._confirmationUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._confirmationUrl = value.confirmationUrl;
        }
    }

    // confirmation_url - computed: true, optional: true, required: false
    private _confirmationUrl?: string; 
    public get confirmationUrl() {
        return this.getStringAttribute('confirmation_url');
    }
    public set confirmationUrl(value: string) {
        this._confirmationUrl = value;
    }
    public resetConfirmationUrl() {
        this._confirmationUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confirmationUrlInput() {
        return this._confirmationUrl;
    }
}
export interface VpcDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#role_arn CcTopicRuleDestination#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#security_groups CcTopicRuleDestination#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#subnet_ids CcTopicRuleDestination#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_topic_rule_destination#vpc_id CcTopicRuleDestination#vpc_id}
    */
    readonly vpcId?: string;
}
export class VpcDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._securityGroups = undefined;
            this._subnetIds = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._securityGroups = value.securityGroups;
            this._subnetIds = value.subnetIds;
            this._vpcId = value.vpcId;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}
}
