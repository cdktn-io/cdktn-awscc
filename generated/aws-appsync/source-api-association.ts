// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSourceApiAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the SourceApiAssociation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#description CcSourceApiAssociation#description}
    */
    readonly description?: string;
    /**
    * Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#merged_api_identifier CcSourceApiAssociation#merged_api_identifier}
    */
    readonly mergedApiIdentifier?: string;
    /**
    * Customized configuration for SourceApiAssociation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#source_api_association_config CcSourceApiAssociation#source_api_association_config}
    */
    readonly sourceApiAssociationConfig?: CcSourceApiAssociation.SourceApiAssociationConfigProperty;
    /**
    * Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#source_api_identifier CcSourceApiAssociation#source_api_identifier}
    */
    readonly sourceApiIdentifier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association awscc_appsync_source_api_association}
*/
export class CcSourceApiAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appsync_source_api_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSourceApiAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSourceApiAssociation to import
    * @param importFromId The id of the existing CcSourceApiAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSourceApiAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_source_api_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association awscc_appsync_source_api_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSourceApiAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSourceApiAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_appsync_source_api_association',
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
        this._description = config.description;
        this._mergedApiIdentifier = config.mergedApiIdentifier;
        this._sourceApiAssociationConfig.internalValue = config.sourceApiAssociationConfig;
        this._sourceApiIdentifier = config.sourceApiIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_arn - computed: true, optional: false, required: false
    public get associationArn() {
        return this.getStringAttribute('association_arn');
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_successful_merge_date - computed: true, optional: false, required: false
    public get lastSuccessfulMergeDate() {
        return this.getStringAttribute('last_successful_merge_date');
    }

    // merged_api_arn - computed: true, optional: false, required: false
    public get mergedApiArn() {
        return this.getStringAttribute('merged_api_arn');
    }

    // merged_api_id - computed: true, optional: false, required: false
    public get mergedApiId() {
        return this.getStringAttribute('merged_api_id');
    }

    // merged_api_identifier - computed: true, optional: true, required: false
    private _mergedApiIdentifier?: string; 
    public get mergedApiIdentifier() {
        return this.getStringAttribute('merged_api_identifier');
    }
    public set mergedApiIdentifier(value: string) {
        this._mergedApiIdentifier = value;
    }
    public resetMergedApiIdentifier() {
        this._mergedApiIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mergedApiIdentifierInput() {
        return this._mergedApiIdentifier;
    }

    // source_api_arn - computed: true, optional: false, required: false
    public get sourceApiArn() {
        return this.getStringAttribute('source_api_arn');
    }

    // source_api_association_config - computed: true, optional: true, required: false
    private _sourceApiAssociationConfig = new CcSourceApiAssociation.SourceApiAssociationConfigPropertyOutputReference(this, "source_api_association_config");
    public get sourceApiAssociationConfig() {
        return this._sourceApiAssociationConfig;
    }
    public putSourceApiAssociationConfig(value: CcSourceApiAssociation.SourceApiAssociationConfigProperty) {
        this._sourceApiAssociationConfig.internalValue = value;
    }
    public resetSourceApiAssociationConfig() {
        this._sourceApiAssociationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceApiAssociationConfigInput() {
        return this._sourceApiAssociationConfig.internalValue;
    }

    // source_api_association_status - computed: true, optional: false, required: false
    public get sourceApiAssociationStatus() {
        return this.getStringAttribute('source_api_association_status');
    }

    // source_api_association_status_detail - computed: true, optional: false, required: false
    public get sourceApiAssociationStatusDetail() {
        return this.getStringAttribute('source_api_association_status_detail');
    }

    // source_api_id - computed: true, optional: false, required: false
    public get sourceApiId() {
        return this.getStringAttribute('source_api_id');
    }

    // source_api_identifier - computed: true, optional: true, required: false
    private _sourceApiIdentifier?: string; 
    public get sourceApiIdentifier() {
        return this.getStringAttribute('source_api_identifier');
    }
    public set sourceApiIdentifier(value: string) {
        this._sourceApiIdentifier = value;
    }
    public resetSourceApiIdentifier() {
        this._sourceApiIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceApiIdentifierInput() {
        return this._sourceApiIdentifier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            merged_api_identifier: cdktn.stringToTerraform(this._mergedApiIdentifier),
            source_api_association_config: ccSourceApiAssociationSourceApiAssociationConfigPropertyToTerraform(this._sourceApiAssociationConfig.internalValue),
            source_api_identifier: cdktn.stringToTerraform(this._sourceApiIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            merged_api_identifier: {
                value: cdktn.stringToHclTerraform(this._mergedApiIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_api_association_config: {
                value: ccSourceApiAssociationSourceApiAssociationConfigPropertyToHclTerraform(this._sourceApiAssociationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSourceApiAssociation.SourceApiAssociationConfigProperty",
            },
            source_api_identifier: {
                value: cdktn.stringToHclTerraform(this._sourceApiIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSourceApiAssociationSourceApiAssociationConfigPropertyToTerraform(struct?: CcSourceApiAssociation.SourceApiAssociationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        merge_type: cdktn.stringToTerraform(struct!.mergeType),
    }
}


export function ccSourceApiAssociationSourceApiAssociationConfigPropertyToHclTerraform(struct?: CcSourceApiAssociation.SourceApiAssociationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        merge_type: {
            value: cdktn.stringToHclTerraform(struct!.mergeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSourceApiAssociation {
export interface SourceApiAssociationConfigProperty {
    /**
    * Configuration of the merged behavior for the association. For example when it could be auto or has to be manual.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_source_api_association#merge_type CcSourceApiAssociation#merge_type}
    */
    readonly mergeType?: string;
}
export class SourceApiAssociationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceApiAssociationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mergeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.mergeType = this._mergeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceApiAssociationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mergeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mergeType = value.mergeType;
        }
    }

    // merge_type - computed: true, optional: true, required: false
    private _mergeType?: string; 
    public get mergeType() {
        return this.getStringAttribute('merge_type');
    }
    public set mergeType(value: string) {
        this._mergeType = value;
    }
    public resetMergeType() {
        this._mergeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mergeTypeInput() {
        return this._mergeType;
    }
}
}
