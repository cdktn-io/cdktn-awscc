// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPipelineEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the pipeline to create the endpoint for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#pipeline_arn CcPipelineEndpoint#pipeline_arn}
    */
    readonly pipelineArn: string;
    /**
    * Configuration settings for the VPC endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#vpc_options CcPipelineEndpoint#vpc_options}
    */
    readonly vpcOptions: CcPipelineEndpoint.VpcOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint awscc_osis_pipeline_endpoint}
*/
export class CcPipelineEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_osis_pipeline_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPipelineEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPipelineEndpoint to import
    * @param importFromId The id of the existing CcPipelineEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPipelineEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_osis_pipeline_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint awscc_osis_pipeline_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPipelineEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcPipelineEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_osis_pipeline_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._pipelineArn = config.pipelineArn;
        this._vpcOptions.internalValue = config.vpcOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // endpoint_id - computed: true, optional: false, required: false
    public get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingest_endpoint_url - computed: true, optional: false, required: false
    public get ingestEndpointUrl() {
        return this.getStringAttribute('ingest_endpoint_url');
    }

    // pipeline_arn - computed: false, optional: false, required: true
    private _pipelineArn?: string; 
    public get pipelineArn() {
        return this.getStringAttribute('pipeline_arn');
    }
    public set pipelineArn(value: string) {
        this._pipelineArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineArnInput() {
        return this._pipelineArn;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // vpc_options - computed: false, optional: false, required: true
    private _vpcOptions = new CcPipelineEndpoint.VpcOptionsPropertyOutputReference(this, "vpc_options");
    public get vpcOptions() {
        return this._vpcOptions;
    }
    public putVpcOptions(value: CcPipelineEndpoint.VpcOptionsProperty) {
        this._vpcOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcOptionsInput() {
        return this._vpcOptions.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            pipeline_arn: cdktn.stringToTerraform(this._pipelineArn),
            vpc_options: ccPipelineEndpointVpcOptionsPropertyToTerraform(this._vpcOptions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            pipeline_arn: {
                value: cdktn.stringToHclTerraform(this._pipelineArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_options: {
                value: ccPipelineEndpointVpcOptionsPropertyToHclTerraform(this._vpcOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipelineEndpoint.VpcOptionsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPipelineEndpointVpcOptionsPropertyToTerraform(struct?: CcPipelineEndpoint.VpcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccPipelineEndpointVpcOptionsPropertyToHclTerraform(struct?: CcPipelineEndpoint.VpcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPipelineEndpoint {
export interface VpcOptionsProperty {
    /**
    * A list of security group IDs that control network access to the pipeline endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#security_group_ids CcPipelineEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * A list of subnet IDs where the pipeline endpoint network interfaces are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#subnet_ids CcPipelineEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class VpcOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
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
}
}
