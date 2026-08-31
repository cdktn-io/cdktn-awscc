// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentProps extends cdktn.TerraformMetaArguments {
    /**
    * Activation key of the Agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#activation_key CcAgent#activation_key}
    */
    readonly activationKey?: string;
    /**
    * The name configured for the agent. Text reference used to identify the agent in the console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#agent_name CcAgent#agent_name}
    */
    readonly agentName?: string;
    /**
    * The ARNs of the security group used to protect your data transfer task subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#security_group_arns CcAgent#security_group_arns}
    */
    readonly securityGroupArns?: string[];
    /**
    * The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#subnet_arns CcAgent#subnet_arns}
    */
    readonly subnetArns?: string[];
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#tags CcAgent#tags}
    */
    readonly tags?: CcAgent.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the VPC endpoint that the agent has access to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#vpc_endpoint_id CcAgent#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent awscc_datasync_agent}
*/
export class CcAgent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_agent";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgent to import
    * @param importFromId The id of the existing CcAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_agent", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent awscc_datasync_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcAgentProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_agent',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._activationKey = config.activationKey;
        this._agentName = config.agentName;
        this._securityGroupArns = config.securityGroupArns;
        this._subnetArns = config.subnetArns;
        this._tags.internalValue = config.tags;
        this._vpcEndpointId = config.vpcEndpointId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activation_key - computed: true, optional: true, required: false
    private _activationKey?: string; 
    public get activationKey() {
        return this.getStringAttribute('activation_key');
    }
    public set activationKey(value: string) {
        this._activationKey = value;
    }
    public resetActivationKey() {
        this._activationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activationKeyInput() {
        return this._activationKey;
    }

    // agent_arn - computed: true, optional: false, required: false
    public get agentArn() {
        return this.getStringAttribute('agent_arn');
    }

    // agent_name - computed: true, optional: true, required: false
    private _agentName?: string; 
    public get agentName() {
        return this.getStringAttribute('agent_name');
    }
    public set agentName(value: string) {
        this._agentName = value;
    }
    public resetAgentName() {
        this._agentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentNameInput() {
        return this._agentName;
    }

    // endpoint_type - computed: true, optional: false, required: false
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // security_group_arns - computed: true, optional: true, required: false
    private _securityGroupArns?: string[]; 
    public get securityGroupArns() {
        return this.getListAttribute('security_group_arns');
    }
    public set securityGroupArns(value: string[]) {
        this._securityGroupArns = value;
    }
    public resetSecurityGroupArns() {
        this._securityGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupArnsInput() {
        return this._securityGroupArns;
    }

    // subnet_arns - computed: true, optional: true, required: false
    private _subnetArns?: string[]; 
    public get subnetArns() {
        return this.getListAttribute('subnet_arns');
    }
    public set subnetArns(value: string[]) {
        this._subnetArns = value;
    }
    public resetSubnetArns() {
        this._subnetArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetArnsInput() {
        return this._subnetArns;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAgent.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAgent.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_endpoint_id - computed: true, optional: true, required: false
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
        this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
        return this._vpcEndpointId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            activation_key: cdktn.stringToTerraform(this._activationKey),
            agent_name: cdktn.stringToTerraform(this._agentName),
            security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupArns),
            subnet_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetArns),
            tags: cdktn.listMapper(ccAgentTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_endpoint_id: cdktn.stringToTerraform(this._vpcEndpointId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            activation_key: {
                value: cdktn.stringToHclTerraform(this._activationKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_name: {
                value: cdktn.stringToHclTerraform(this._agentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            subnet_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAgentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAgent.TagPropertyList",
            },
            vpc_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._vpcEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgentTagPropertyToTerraform(struct?: CcAgent.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAgentTagPropertyToHclTerraform(struct?: CcAgent.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAgent {
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#key CcAgent#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_agent#value CcAgent#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

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
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
