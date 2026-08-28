// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkflowVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#accelerators CcWorkflowVersion#accelerators}
    */
    readonly accelerators?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#definition_uri CcWorkflowVersion#definition_uri}
    */
    readonly definitionUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#description CcWorkflowVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#engine CcWorkflowVersion#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#main CcWorkflowVersion#main}
    */
    readonly main?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#parameter_template CcWorkflowVersion#parameter_template}
    */
    readonly parameterTemplate?: { [key: string]: CcWorkflowVersion.WorkflowParameterProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#storage_capacity CcWorkflowVersion#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#storage_type CcWorkflowVersion#storage_type}
    */
    readonly storageType?: string;
    /**
    * A map of resource tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#tags CcWorkflowVersion#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#version_name CcWorkflowVersion#version_name}
    */
    readonly versionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#workflow_bucket_owner_id CcWorkflowVersion#workflow_bucket_owner_id}
    */
    readonly workflowBucketOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#workflow_id CcWorkflowVersion#workflow_id}
    */
    readonly workflowId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version awscc_omics_workflow_version}
*/
export class CcWorkflowVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_omics_workflow_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkflowVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkflowVersion to import
    * @param importFromId The id of the existing CcWorkflowVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkflowVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_omics_workflow_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version awscc_omics_workflow_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkflowVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkflowVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_omics_workflow_version',
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
        this._accelerators = config.accelerators;
        this._definitionUri = config.definitionUri;
        this._description = config.description;
        this._engine = config.engine;
        this._main = config.main;
        this._parameterTemplate.internalValue = config.parameterTemplate;
        this._storageCapacity = config.storageCapacity;
        this._storageType = config.storageType;
        this._tags = config.tags;
        this._versionName = config.versionName;
        this._workflowBucketOwnerId = config.workflowBucketOwnerId;
        this._workflowId = config.workflowId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accelerators - computed: true, optional: true, required: false
    private _accelerators?: string; 
    public get accelerators() {
        return this.getStringAttribute('accelerators');
    }
    public set accelerators(value: string) {
        this._accelerators = value;
    }
    public resetAccelerators() {
        this._accelerators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorsInput() {
        return this._accelerators;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // definition_uri - computed: true, optional: true, required: false
    private _definitionUri?: string; 
    public get definitionUri() {
        return this.getStringAttribute('definition_uri');
    }
    public set definitionUri(value: string) {
        this._definitionUri = value;
    }
    public resetDefinitionUri() {
        this._definitionUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionUriInput() {
        return this._definitionUri;
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

    // engine - computed: true, optional: true, required: false
    private _engine?: string; 
    public get engine() {
        return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
        this._engine = value;
    }
    public resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
        return this._engine;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // main - computed: true, optional: true, required: false
    private _main?: string; 
    public get main() {
        return this.getStringAttribute('main');
    }
    public set main(value: string) {
        this._main = value;
    }
    public resetMain() {
        this._main = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mainInput() {
        return this._main;
    }

    // parameter_template - computed: true, optional: true, required: false
    private _parameterTemplate = new CcWorkflowVersion.WorkflowParameterPropertyMap(this, "parameter_template");
    public get parameterTemplate() {
        return this._parameterTemplate;
    }
    public putParameterTemplate(value: { [key: string]: CcWorkflowVersion.WorkflowParameterProperty } | cdktn.IResolvable) {
        this._parameterTemplate.internalValue = value;
    }
    public resetParameterTemplate() {
        this._parameterTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterTemplateInput() {
        return this._parameterTemplate.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // storage_capacity - computed: true, optional: true, required: false
    private _storageCapacity?: number; 
    public get storageCapacity() {
        return this.getNumberAttribute('storage_capacity');
    }
    public set storageCapacity(value: number) {
        this._storageCapacity = value;
    }
    public resetStorageCapacity() {
        this._storageCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityInput() {
        return this._storageCapacity;
    }

    // storage_type - computed: true, optional: true, required: false
    private _storageType?: string; 
    public get storageType() {
        return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string) {
        this._storageType = value;
    }
    public resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
        return this._storageType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // uuid - computed: true, optional: false, required: false
    public get uuid() {
        return this.getStringAttribute('uuid');
    }

    // version_name - computed: false, optional: false, required: true
    private _versionName?: string; 
    public get versionName() {
        return this.getStringAttribute('version_name');
    }
    public set versionName(value: string) {
        this._versionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionNameInput() {
        return this._versionName;
    }

    // workflow_bucket_owner_id - computed: true, optional: true, required: false
    private _workflowBucketOwnerId?: string; 
    public get workflowBucketOwnerId() {
        return this.getStringAttribute('workflow_bucket_owner_id');
    }
    public set workflowBucketOwnerId(value: string) {
        this._workflowBucketOwnerId = value;
    }
    public resetWorkflowBucketOwnerId() {
        this._workflowBucketOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowBucketOwnerIdInput() {
        return this._workflowBucketOwnerId;
    }

    // workflow_id - computed: false, optional: false, required: true
    private _workflowId?: string; 
    public get workflowId() {
        return this.getStringAttribute('workflow_id');
    }
    public set workflowId(value: string) {
        this._workflowId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowIdInput() {
        return this._workflowId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accelerators: cdktn.stringToTerraform(this._accelerators),
            definition_uri: cdktn.stringToTerraform(this._definitionUri),
            description: cdktn.stringToTerraform(this._description),
            engine: cdktn.stringToTerraform(this._engine),
            main: cdktn.stringToTerraform(this._main),
            parameter_template: cdktn.hashMapper(ccWorkflowVersionWorkflowParameterPropertyToTerraform)(this._parameterTemplate.internalValue),
            storage_capacity: cdktn.numberToTerraform(this._storageCapacity),
            storage_type: cdktn.stringToTerraform(this._storageType),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            version_name: cdktn.stringToTerraform(this._versionName),
            workflow_bucket_owner_id: cdktn.stringToTerraform(this._workflowBucketOwnerId),
            workflow_id: cdktn.stringToTerraform(this._workflowId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accelerators: {
                value: cdktn.stringToHclTerraform(this._accelerators),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            definition_uri: {
                value: cdktn.stringToHclTerraform(this._definitionUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            main: {
                value: cdktn.stringToHclTerraform(this._main),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameter_template: {
                value: cdktn.hashMapperHcl(ccWorkflowVersionWorkflowParameterPropertyToHclTerraform)(this._parameterTemplate.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcWorkflowVersion.WorkflowParameterPropertyMap",
            },
            storage_capacity: {
                value: cdktn.numberToHclTerraform(this._storageCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            storage_type: {
                value: cdktn.stringToHclTerraform(this._storageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            version_name: {
                value: cdktn.stringToHclTerraform(this._versionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workflow_bucket_owner_id: {
                value: cdktn.stringToHclTerraform(this._workflowBucketOwnerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workflow_id: {
                value: cdktn.stringToHclTerraform(this._workflowId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkflowVersionWorkflowParameterPropertyToTerraform(struct?: CcWorkflowVersion.WorkflowParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        optional: cdktn.booleanToTerraform(struct!.optional),
    }
}


export function ccWorkflowVersionWorkflowParameterPropertyToHclTerraform(struct?: CcWorkflowVersion.WorkflowParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        optional: {
            value: cdktn.booleanToHclTerraform(struct!.optional),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWorkflowVersion {
export interface WorkflowParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#description CcWorkflowVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_workflow_version#optional CcWorkflowVersion#optional}
    */
    readonly optional?: boolean | cdktn.IResolvable;
}
export class WorkflowParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): WorkflowParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._optional !== undefined) {
            hasAnyValues = true;
            internalValueResult.optional = this._optional;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._optional = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._optional = value.optional;
        }
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

    // optional - computed: true, optional: true, required: false
    private _optional?: boolean | cdktn.IResolvable; 
    public get optional() {
        return this.getBooleanAttribute('optional');
    }
    public set optional(value: boolean | cdktn.IResolvable) {
        this._optional = value;
    }
    public resetOptional() {
        this._optional = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionalInput() {
        return this._optional;
    }
}

export class WorkflowParameterPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: WorkflowParameterProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): WorkflowParameterPropertyOutputReference {
        return new WorkflowParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
