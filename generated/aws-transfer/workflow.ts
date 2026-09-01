// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkflowProps extends cdktn.TerraformMetaArguments {
    /**
    * A textual description for the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#description CcWorkflow#description}
    */
    readonly description?: string;
    /**
    * Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#on_exception_steps CcWorkflow#on_exception_steps}
    */
    readonly onExceptionSteps?: CcWorkflow.WorkflowStepProperty[] | cdktn.IResolvable;
    /**
    * Specifies the details for the steps that are in the specified workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#steps CcWorkflow#steps}
    */
    readonly steps: CcWorkflow.StepsProperty[] | cdktn.IResolvable;
    /**
    * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#tags CcWorkflow#tags}
    */
    readonly tags?: CcWorkflow.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow awscc_transfer_workflow}
*/
export class CcWorkflow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transfer_workflow";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkflow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkflow to import
    * @param importFromId The id of the existing CcWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkflow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_workflow", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow awscc_transfer_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkflowProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkflowProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transfer_workflow',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
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
        this._onExceptionSteps.internalValue = config.onExceptionSteps;
        this._steps.internalValue = config.steps;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // on_exception_steps - computed: true, optional: true, required: false
    private _onExceptionSteps = new CcWorkflow.WorkflowStepPropertyList(this, "on_exception_steps", false);
    public get onExceptionSteps() {
        return this._onExceptionSteps;
    }
    public putOnExceptionSteps(value: CcWorkflow.WorkflowStepProperty[] | cdktn.IResolvable) {
        this._onExceptionSteps.internalValue = value;
    }
    public resetOnExceptionSteps() {
        this._onExceptionSteps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onExceptionStepsInput() {
        return this._onExceptionSteps.internalValue;
    }

    // steps - computed: false, optional: false, required: true
    private _steps = new CcWorkflow.StepsPropertyList(this, "steps", false);
    public get steps() {
        return this._steps;
    }
    public putSteps(value: CcWorkflow.StepsProperty[] | cdktn.IResolvable) {
        this._steps.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stepsInput() {
        return this._steps.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkflow.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkflow.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workflow_id - computed: true, optional: false, required: false
    public get workflowId() {
        return this.getStringAttribute('workflow_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            on_exception_steps: cdktn.listMapper(ccWorkflowWorkflowStepPropertyToTerraform, false)(this._onExceptionSteps.internalValue),
            steps: cdktn.listMapper(ccWorkflowStepsPropertyToTerraform, false)(this._steps.internalValue),
            tags: cdktn.listMapper(ccWorkflowTagPropertyToTerraform, false)(this._tags.internalValue),
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
            on_exception_steps: {
                value: cdktn.listMapperHcl(ccWorkflowWorkflowStepPropertyToHclTerraform, false)(this._onExceptionSteps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkflow.WorkflowStepPropertyList",
            },
            steps: {
                value: cdktn.listMapperHcl(ccWorkflowStepsPropertyToHclTerraform, false)(this._steps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkflow.StepsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkflowTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWorkflow.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkflowS3InputFileLocationPropertyToTerraform(struct?: CcWorkflow.S3InputFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccWorkflowS3InputFileLocationPropertyToHclTerraform(struct?: CcWorkflow.S3InputFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowS3FileLocationPropertyToTerraform(struct?: CcWorkflow.S3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_file_location: ccWorkflowS3InputFileLocationPropertyToTerraform(struct!.s3FileLocation),
    }
}


export function ccWorkflowS3FileLocationPropertyToHclTerraform(struct?: CcWorkflow.S3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_file_location: {
            value: ccWorkflowS3InputFileLocationPropertyToHclTerraform(struct!.s3FileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "S3InputFileLocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowCopyStepDetailsPropertyToTerraform(struct?: CcWorkflow.CopyStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_file_location: ccWorkflowS3FileLocationPropertyToTerraform(struct!.destinationFileLocation),
        name: cdktn.stringToTerraform(struct!.name),
        overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    }
}


export function ccWorkflowCopyStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.CopyStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_file_location: {
            value: ccWorkflowS3FileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "S3FileLocationProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overwrite_existing: {
            value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowCustomStepDetailsPropertyToTerraform(struct?: CcWorkflow.CustomStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
        target: cdktn.stringToTerraform(struct!.target),
        timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    }
}


export function ccWorkflowCustomStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.CustomStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktn.stringToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowEfsInputFileLocationPropertyToTerraform(struct?: CcWorkflow.EfsInputFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccWorkflowEfsInputFileLocationPropertyToHclTerraform(struct?: CcWorkflow.EfsInputFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct?: CcWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct?: CcWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowInputFileLocationPropertyToTerraform(struct?: CcWorkflow.InputFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs_file_location: ccWorkflowEfsInputFileLocationPropertyToTerraform(struct!.efsFileLocation),
        s3_file_location: ccWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct!.s3FileLocation),
    }
}


export function ccWorkflowInputFileLocationPropertyToHclTerraform(struct?: CcWorkflow.InputFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs_file_location: {
            value: ccWorkflowEfsInputFileLocationPropertyToHclTerraform(struct!.efsFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "EfsInputFileLocationProperty",
        },
        s3_file_location: {
            value: ccWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct!.s3FileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowDecryptStepDetailsPropertyToTerraform(struct?: CcWorkflow.DecryptStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_file_location: ccWorkflowInputFileLocationPropertyToTerraform(struct!.destinationFileLocation),
        name: cdktn.stringToTerraform(struct!.name),
        overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccWorkflowDecryptStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.DecryptStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_file_location: {
            value: ccWorkflowInputFileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "InputFileLocationProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overwrite_existing: {
            value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowDeleteStepDetailsPropertyToTerraform(struct?: CcWorkflow.DeleteStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    }
}


export function ccWorkflowDeleteStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.DeleteStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowS3TagPropertyToTerraform(struct?: CcWorkflow.S3TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkflowS3TagPropertyToHclTerraform(struct?: CcWorkflow.S3TagProperty | cdktn.IResolvable): any {
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


export function ccWorkflowTagStepDetailsPropertyToTerraform(struct?: CcWorkflow.TagStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
        tags: cdktn.listMapper(ccWorkflowS3TagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccWorkflowTagStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.TagStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccWorkflowS3TagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "S3TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowWorkflowStepPropertyToTerraform(struct?: CcWorkflow.WorkflowStepProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_step_details: ccWorkflowCopyStepDetailsPropertyToTerraform(struct!.copyStepDetails),
        custom_step_details: ccWorkflowCustomStepDetailsPropertyToTerraform(struct!.customStepDetails),
        decrypt_step_details: ccWorkflowDecryptStepDetailsPropertyToTerraform(struct!.decryptStepDetails),
        delete_step_details: ccWorkflowDeleteStepDetailsPropertyToTerraform(struct!.deleteStepDetails),
        tag_step_details: ccWorkflowTagStepDetailsPropertyToTerraform(struct!.tagStepDetails),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccWorkflowWorkflowStepPropertyToHclTerraform(struct?: CcWorkflow.WorkflowStepProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_step_details: {
            value: ccWorkflowCopyStepDetailsPropertyToHclTerraform(struct!.copyStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "CopyStepDetailsProperty",
        },
        custom_step_details: {
            value: ccWorkflowCustomStepDetailsPropertyToHclTerraform(struct!.customStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomStepDetailsProperty",
        },
        decrypt_step_details: {
            value: ccWorkflowDecryptStepDetailsPropertyToHclTerraform(struct!.decryptStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "DecryptStepDetailsProperty",
        },
        delete_step_details: {
            value: ccWorkflowDeleteStepDetailsPropertyToHclTerraform(struct!.deleteStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "DeleteStepDetailsProperty",
        },
        tag_step_details: {
            value: ccWorkflowTagStepDetailsPropertyToHclTerraform(struct!.tagStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "TagStepDetailsProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct?: CcWorkflow.StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct?: CcWorkflow.StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToTerraform(struct?: CcWorkflow.StepsCopyStepDetailsDestinationFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_file_location: ccWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct!.s3FileLocation),
    }
}


export function ccWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToHclTerraform(struct?: CcWorkflow.StepsCopyStepDetailsDestinationFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_file_location: {
            value: ccWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct!.s3FileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsCopyStepDetailsPropertyToTerraform(struct?: CcWorkflow.StepsCopyStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_file_location: ccWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToTerraform(struct!.destinationFileLocation),
        name: cdktn.stringToTerraform(struct!.name),
        overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    }
}


export function ccWorkflowStepsCopyStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.StepsCopyStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_file_location: {
            value: ccWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsCopyStepDetailsDestinationFileLocationProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overwrite_existing: {
            value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsCustomStepDetailsPropertyToTerraform(struct?: CcWorkflow.StepsCustomStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
        target: cdktn.stringToTerraform(struct!.target),
        timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    }
}


export function ccWorkflowStepsCustomStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.StepsCustomStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktn.stringToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowEfsFileLocationPropertyToTerraform(struct?: CcWorkflow.EfsFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccWorkflowEfsFileLocationPropertyToHclTerraform(struct?: CcWorkflow.EfsFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct?: CcWorkflow.StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct?: CcWorkflow.StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToTerraform(struct?: CcWorkflow.StepsDecryptStepDetailsDestinationFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs_file_location: ccWorkflowEfsFileLocationPropertyToTerraform(struct!.efsFileLocation),
        s3_file_location: ccWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct!.s3FileLocation),
    }
}


export function ccWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToHclTerraform(struct?: CcWorkflow.StepsDecryptStepDetailsDestinationFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs_file_location: {
            value: ccWorkflowEfsFileLocationPropertyToHclTerraform(struct!.efsFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "EfsFileLocationProperty",
        },
        s3_file_location: {
            value: ccWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct!.s3FileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsDecryptStepDetailsPropertyToTerraform(struct?: CcWorkflow.StepsDecryptStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_file_location: ccWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToTerraform(struct!.destinationFileLocation),
        name: cdktn.stringToTerraform(struct!.name),
        overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccWorkflowStepsDecryptStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.StepsDecryptStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_file_location: {
            value: ccWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsDecryptStepDetailsDestinationFileLocationProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overwrite_existing: {
            value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsDeleteStepDetailsPropertyToTerraform(struct?: CcWorkflow.StepsDeleteStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    }
}


export function ccWorkflowStepsDeleteStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.StepsDeleteStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowTagsPropertyToTerraform(struct?: CcWorkflow.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkflowTagsPropertyToHclTerraform(struct?: CcWorkflow.TagsProperty | cdktn.IResolvable): any {
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


export function ccWorkflowStepsTagStepDetailsPropertyToTerraform(struct?: CcWorkflow.StepsTagStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
        tags: cdktn.listMapper(ccWorkflowTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccWorkflowStepsTagStepDetailsPropertyToHclTerraform(struct?: CcWorkflow.StepsTagStepDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_file_location: {
            value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccWorkflowTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "TagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowStepsPropertyToTerraform(struct?: CcWorkflow.StepsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_step_details: ccWorkflowStepsCopyStepDetailsPropertyToTerraform(struct!.copyStepDetails),
        custom_step_details: ccWorkflowStepsCustomStepDetailsPropertyToTerraform(struct!.customStepDetails),
        decrypt_step_details: ccWorkflowStepsDecryptStepDetailsPropertyToTerraform(struct!.decryptStepDetails),
        delete_step_details: ccWorkflowStepsDeleteStepDetailsPropertyToTerraform(struct!.deleteStepDetails),
        tag_step_details: ccWorkflowStepsTagStepDetailsPropertyToTerraform(struct!.tagStepDetails),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccWorkflowStepsPropertyToHclTerraform(struct?: CcWorkflow.StepsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_step_details: {
            value: ccWorkflowStepsCopyStepDetailsPropertyToHclTerraform(struct!.copyStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsCopyStepDetailsProperty",
        },
        custom_step_details: {
            value: ccWorkflowStepsCustomStepDetailsPropertyToHclTerraform(struct!.customStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsCustomStepDetailsProperty",
        },
        decrypt_step_details: {
            value: ccWorkflowStepsDecryptStepDetailsPropertyToHclTerraform(struct!.decryptStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsDecryptStepDetailsProperty",
        },
        delete_step_details: {
            value: ccWorkflowStepsDeleteStepDetailsPropertyToHclTerraform(struct!.deleteStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsDeleteStepDetailsProperty",
        },
        tag_step_details: {
            value: ccWorkflowStepsTagStepDetailsPropertyToHclTerraform(struct!.tagStepDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "StepsTagStepDetailsProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkflowTagPropertyToTerraform(struct?: CcWorkflow.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkflowTagPropertyToHclTerraform(struct?: CcWorkflow.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWorkflow {
export interface S3InputFileLocationProperty {
    /**
    * Specifies the S3 bucket that contains the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#bucket CcWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#key CcWorkflow#key}
    */
    readonly key?: string;
}
export class S3InputFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3InputFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3InputFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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
}
export interface S3FileLocationProperty {
    /**
    * Specifies the details for a S3 file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#s3_file_location CcWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: S3InputFileLocationProperty;
}
export class S3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3FileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3FileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3FileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3FileLocation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3FileLocation.internalValue = value.s3FileLocation;
        }
    }

    // s3_file_location - computed: true, optional: true, required: false
    private _s3FileLocation = new S3InputFileLocationPropertyOutputReference(this, "s3_file_location");
    public get s3FileLocation() {
        return this._s3FileLocation;
    }
    public putS3FileLocation(value: S3InputFileLocationProperty) {
        this._s3FileLocation.internalValue = value;
    }
    public resetS3FileLocation() {
        this._s3FileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileLocationInput() {
        return this._s3FileLocation.internalValue;
    }
}
export interface CopyStepDetailsProperty {
    /**
    * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#destination_file_location CcWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: S3FileLocationProperty;
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#overwrite_existing CcWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
}
export class CopyStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CopyStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._overwriteExisting !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwriteExisting = this._overwriteExisting;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CopyStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = undefined;
            this._name = undefined;
            this._overwriteExisting = undefined;
            this._sourceFileLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = value.destinationFileLocation;
            this._name = value.name;
            this._overwriteExisting = value.overwriteExisting;
            this._sourceFileLocation = value.sourceFileLocation;
        }
    }

    // destination_file_location - computed: true, optional: true, required: false
    private _destinationFileLocation = new S3FileLocationPropertyOutputReference(this, "destination_file_location");
    public get destinationFileLocation() {
        return this._destinationFileLocation;
    }
    public putDestinationFileLocation(value: S3FileLocationProperty) {
        this._destinationFileLocation.internalValue = value;
    }
    public resetDestinationFileLocation() {
        this._destinationFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationFileLocationInput() {
        return this._destinationFileLocation.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // overwrite_existing - computed: true, optional: true, required: false
    private _overwriteExisting?: string; 
    public get overwriteExisting() {
        return this.getStringAttribute('overwrite_existing');
    }
    public set overwriteExisting(value: string) {
        this._overwriteExisting = value;
    }
    public resetOverwriteExisting() {
        this._overwriteExisting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteExistingInput() {
        return this._overwriteExisting;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }
}
export interface CustomStepDetailsProperty {
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * The ARN for the lambda function that is being called.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#target CcWorkflow#target}
    */
    readonly target?: string;
    /**
    * Timeout, in seconds, for the step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#timeout_seconds CcWorkflow#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
}
export class CustomStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._timeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sourceFileLocation = undefined;
            this._target = undefined;
            this._timeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sourceFileLocation = value.sourceFileLocation;
            this._target = value.target;
            this._timeoutSeconds = value.timeoutSeconds;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }

    // target - computed: true, optional: true, required: false
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    public resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }

    // timeout_seconds - computed: true, optional: true, required: false
    private _timeoutSeconds?: number; 
    public get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    public set timeoutSeconds(value: number) {
        this._timeoutSeconds = value;
    }
    public resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
}
export interface EfsInputFileLocationProperty {
    /**
    * Specifies the EFS filesystem that contains the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#file_system_id CcWorkflow#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * The name assigned to the file when it was created in EFS. You use the object path to retrieve the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#path CcWorkflow#path}
    */
    readonly path?: string;
}
export class EfsInputFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EfsInputFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EfsInputFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._path = value.path;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}
export interface OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty {
    /**
    * Specifies the S3 bucket that contains the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#bucket CcWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#key CcWorkflow#key}
    */
    readonly key?: string;
}
export class OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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
}
export interface InputFileLocationProperty {
    /**
    * Specifies the details for an EFS file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#efs_file_location CcWorkflow#efs_file_location}
    */
    readonly efsFileLocation?: EfsInputFileLocationProperty;
    /**
    * Specifies the details for a S3 file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#s3_file_location CcWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty;
}
export class InputFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efsFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
        }
        if (this._s3FileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efsFileLocation.internalValue = undefined;
            this._s3FileLocation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efsFileLocation.internalValue = value.efsFileLocation;
            this._s3FileLocation.internalValue = value.s3FileLocation;
        }
    }

    // efs_file_location - computed: true, optional: true, required: false
    private _efsFileLocation = new EfsInputFileLocationPropertyOutputReference(this, "efs_file_location");
    public get efsFileLocation() {
        return this._efsFileLocation;
    }
    public putEfsFileLocation(value: EfsInputFileLocationProperty) {
        this._efsFileLocation.internalValue = value;
    }
    public resetEfsFileLocation() {
        this._efsFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsFileLocationInput() {
        return this._efsFileLocation.internalValue;
    }

    // s3_file_location - computed: true, optional: true, required: false
    private _s3FileLocation = new OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference(this, "s3_file_location");
    public get s3FileLocation() {
        return this._s3FileLocation;
    }
    public putS3FileLocation(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty) {
        this._s3FileLocation.internalValue = value;
    }
    public resetS3FileLocation() {
        this._s3FileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileLocationInput() {
        return this._s3FileLocation.internalValue;
    }
}
export interface DecryptStepDetailsProperty {
    /**
    * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#destination_file_location CcWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: InputFileLocationProperty;
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#overwrite_existing CcWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Specifies which encryption method to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#type CcWorkflow#type}
    */
    readonly type?: string;
}
export class DecryptStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DecryptStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._overwriteExisting !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwriteExisting = this._overwriteExisting;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DecryptStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = undefined;
            this._name = undefined;
            this._overwriteExisting = undefined;
            this._sourceFileLocation = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = value.destinationFileLocation;
            this._name = value.name;
            this._overwriteExisting = value.overwriteExisting;
            this._sourceFileLocation = value.sourceFileLocation;
            this._type = value.type;
        }
    }

    // destination_file_location - computed: true, optional: true, required: false
    private _destinationFileLocation = new InputFileLocationPropertyOutputReference(this, "destination_file_location");
    public get destinationFileLocation() {
        return this._destinationFileLocation;
    }
    public putDestinationFileLocation(value: InputFileLocationProperty) {
        this._destinationFileLocation.internalValue = value;
    }
    public resetDestinationFileLocation() {
        this._destinationFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationFileLocationInput() {
        return this._destinationFileLocation.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // overwrite_existing - computed: true, optional: true, required: false
    private _overwriteExisting?: string; 
    public get overwriteExisting() {
        return this.getStringAttribute('overwrite_existing');
    }
    public set overwriteExisting(value: string) {
        this._overwriteExisting = value;
    }
    public resetOverwriteExisting() {
        this._overwriteExisting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteExistingInput() {
        return this._overwriteExisting;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DeleteStepDetailsProperty {
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
}
export class DeleteStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeleteStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeleteStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sourceFileLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sourceFileLocation = value.sourceFileLocation;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }
}
export interface S3TagProperty {
    /**
    * The name assigned to the tag that you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#key CcWorkflow#key}
    */
    readonly key?: string;
    /**
    * The value that corresponds to the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#value CcWorkflow#value}
    */
    readonly value?: string;
}
export class S3TagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): S3TagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: S3TagProperty | cdktn.IResolvable | undefined) {
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

export class S3TagPropertyList extends cdktn.ComplexList {
    public internalValue? : S3TagProperty[] | cdktn.IResolvable

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
    public get(index: number): S3TagPropertyOutputReference {
        return new S3TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagStepDetailsProperty {
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Array that contains from 1 to 10 key/value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#tags CcWorkflow#tags}
    */
    readonly tags?: S3TagProperty[] | cdktn.IResolvable;
}
export class TagStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TagStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sourceFileLocation = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sourceFileLocation = value.sourceFileLocation;
            this._tags.internalValue = value.tags;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new S3TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: S3TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface WorkflowStepProperty {
    /**
    * Details for a step that performs a file copy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#copy_step_details CcWorkflow#copy_step_details}
    */
    readonly copyStepDetails?: CopyStepDetailsProperty;
    /**
    * Details for a step that invokes a lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#custom_step_details CcWorkflow#custom_step_details}
    */
    readonly customStepDetails?: CustomStepDetailsProperty;
    /**
    * Details for a step that performs a file decryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#decrypt_step_details CcWorkflow#decrypt_step_details}
    */
    readonly decryptStepDetails?: DecryptStepDetailsProperty;
    /**
    * Details for a step that deletes the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#delete_step_details CcWorkflow#delete_step_details}
    */
    readonly deleteStepDetails?: DeleteStepDetailsProperty;
    /**
    * Details for a step that creates one or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#tag_step_details CcWorkflow#tag_step_details}
    */
    readonly tagStepDetails?: TagStepDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#type CcWorkflow#type}
    */
    readonly type?: string;
}
export class WorkflowStepPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WorkflowStepProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
        }
        if (this._customStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
        }
        if (this._decryptStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
        }
        if (this._deleteStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
        }
        if (this._tagStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowStepProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyStepDetails.internalValue = undefined;
            this._customStepDetails.internalValue = undefined;
            this._decryptStepDetails.internalValue = undefined;
            this._deleteStepDetails.internalValue = undefined;
            this._tagStepDetails.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyStepDetails.internalValue = value.copyStepDetails;
            this._customStepDetails.internalValue = value.customStepDetails;
            this._decryptStepDetails.internalValue = value.decryptStepDetails;
            this._deleteStepDetails.internalValue = value.deleteStepDetails;
            this._tagStepDetails.internalValue = value.tagStepDetails;
            this._type = value.type;
        }
    }

    // copy_step_details - computed: true, optional: true, required: false
    private _copyStepDetails = new CopyStepDetailsPropertyOutputReference(this, "copy_step_details");
    public get copyStepDetails() {
        return this._copyStepDetails;
    }
    public putCopyStepDetails(value: CopyStepDetailsProperty) {
        this._copyStepDetails.internalValue = value;
    }
    public resetCopyStepDetails() {
        this._copyStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyStepDetailsInput() {
        return this._copyStepDetails.internalValue;
    }

    // custom_step_details - computed: true, optional: true, required: false
    private _customStepDetails = new CustomStepDetailsPropertyOutputReference(this, "custom_step_details");
    public get customStepDetails() {
        return this._customStepDetails;
    }
    public putCustomStepDetails(value: CustomStepDetailsProperty) {
        this._customStepDetails.internalValue = value;
    }
    public resetCustomStepDetails() {
        this._customStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customStepDetailsInput() {
        return this._customStepDetails.internalValue;
    }

    // decrypt_step_details - computed: true, optional: true, required: false
    private _decryptStepDetails = new DecryptStepDetailsPropertyOutputReference(this, "decrypt_step_details");
    public get decryptStepDetails() {
        return this._decryptStepDetails;
    }
    public putDecryptStepDetails(value: DecryptStepDetailsProperty) {
        this._decryptStepDetails.internalValue = value;
    }
    public resetDecryptStepDetails() {
        this._decryptStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptStepDetailsInput() {
        return this._decryptStepDetails.internalValue;
    }

    // delete_step_details - computed: true, optional: true, required: false
    private _deleteStepDetails = new DeleteStepDetailsPropertyOutputReference(this, "delete_step_details");
    public get deleteStepDetails() {
        return this._deleteStepDetails;
    }
    public putDeleteStepDetails(value: DeleteStepDetailsProperty) {
        this._deleteStepDetails.internalValue = value;
    }
    public resetDeleteStepDetails() {
        this._deleteStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteStepDetailsInput() {
        return this._deleteStepDetails.internalValue;
    }

    // tag_step_details - computed: true, optional: true, required: false
    private _tagStepDetails = new TagStepDetailsPropertyOutputReference(this, "tag_step_details");
    public get tagStepDetails() {
        return this._tagStepDetails;
    }
    public putTagStepDetails(value: TagStepDetailsProperty) {
        this._tagStepDetails.internalValue = value;
    }
    public resetTagStepDetails() {
        this._tagStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagStepDetailsInput() {
        return this._tagStepDetails.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class WorkflowStepPropertyList extends cdktn.ComplexList {
    public internalValue? : WorkflowStepProperty[] | cdktn.IResolvable

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
    public get(index: number): WorkflowStepPropertyOutputReference {
        return new WorkflowStepPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty {
    /**
    * Specifies the S3 bucket that contains the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#bucket CcWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#key CcWorkflow#key}
    */
    readonly key?: string;
}
export class StepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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
}
export interface StepsCopyStepDetailsDestinationFileLocationProperty {
    /**
    * Specifies the details for a S3 file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#s3_file_location CcWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty;
}
export class StepsCopyStepDetailsDestinationFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsCopyStepDetailsDestinationFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3FileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsCopyStepDetailsDestinationFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3FileLocation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3FileLocation.internalValue = value.s3FileLocation;
        }
    }

    // s3_file_location - computed: true, optional: true, required: false
    private _s3FileLocation = new StepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference(this, "s3_file_location");
    public get s3FileLocation() {
        return this._s3FileLocation;
    }
    public putS3FileLocation(value: StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty) {
        this._s3FileLocation.internalValue = value;
    }
    public resetS3FileLocation() {
        this._s3FileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileLocationInput() {
        return this._s3FileLocation.internalValue;
    }
}
export interface StepsCopyStepDetailsProperty {
    /**
    * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#destination_file_location CcWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: StepsCopyStepDetailsDestinationFileLocationProperty;
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#overwrite_existing CcWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
}
export class StepsCopyStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsCopyStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._overwriteExisting !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwriteExisting = this._overwriteExisting;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsCopyStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = undefined;
            this._name = undefined;
            this._overwriteExisting = undefined;
            this._sourceFileLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = value.destinationFileLocation;
            this._name = value.name;
            this._overwriteExisting = value.overwriteExisting;
            this._sourceFileLocation = value.sourceFileLocation;
        }
    }

    // destination_file_location - computed: true, optional: true, required: false
    private _destinationFileLocation = new StepsCopyStepDetailsDestinationFileLocationPropertyOutputReference(this, "destination_file_location");
    public get destinationFileLocation() {
        return this._destinationFileLocation;
    }
    public putDestinationFileLocation(value: StepsCopyStepDetailsDestinationFileLocationProperty) {
        this._destinationFileLocation.internalValue = value;
    }
    public resetDestinationFileLocation() {
        this._destinationFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationFileLocationInput() {
        return this._destinationFileLocation.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // overwrite_existing - computed: true, optional: true, required: false
    private _overwriteExisting?: string; 
    public get overwriteExisting() {
        return this.getStringAttribute('overwrite_existing');
    }
    public set overwriteExisting(value: string) {
        this._overwriteExisting = value;
    }
    public resetOverwriteExisting() {
        this._overwriteExisting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteExistingInput() {
        return this._overwriteExisting;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }
}
export interface StepsCustomStepDetailsProperty {
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * The ARN for the lambda function that is being called.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#target CcWorkflow#target}
    */
    readonly target?: string;
    /**
    * Timeout, in seconds, for the step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#timeout_seconds CcWorkflow#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
}
export class StepsCustomStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsCustomStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._timeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsCustomStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sourceFileLocation = undefined;
            this._target = undefined;
            this._timeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sourceFileLocation = value.sourceFileLocation;
            this._target = value.target;
            this._timeoutSeconds = value.timeoutSeconds;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }

    // target - computed: true, optional: true, required: false
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    public resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }

    // timeout_seconds - computed: true, optional: true, required: false
    private _timeoutSeconds?: number; 
    public get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    public set timeoutSeconds(value: number) {
        this._timeoutSeconds = value;
    }
    public resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
}
export interface EfsFileLocationProperty {
    /**
    * Specifies the EFS filesystem that contains the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#file_system_id CcWorkflow#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * The name assigned to the file when it was created in EFS. You use the object path to retrieve the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#path CcWorkflow#path}
    */
    readonly path?: string;
}
export class EfsFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EfsFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EfsFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._path = value.path;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}
export interface StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty {
    /**
    * Specifies the S3 bucket that contains the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#bucket CcWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#key CcWorkflow#key}
    */
    readonly key?: string;
}
export class StepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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
}
export interface StepsDecryptStepDetailsDestinationFileLocationProperty {
    /**
    * Specifies the details for an EFS file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#efs_file_location CcWorkflow#efs_file_location}
    */
    readonly efsFileLocation?: EfsFileLocationProperty;
    /**
    * Specifies the details for a S3 file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#s3_file_location CcWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty;
}
export class StepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsDecryptStepDetailsDestinationFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efsFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
        }
        if (this._s3FileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsDecryptStepDetailsDestinationFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efsFileLocation.internalValue = undefined;
            this._s3FileLocation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efsFileLocation.internalValue = value.efsFileLocation;
            this._s3FileLocation.internalValue = value.s3FileLocation;
        }
    }

    // efs_file_location - computed: true, optional: true, required: false
    private _efsFileLocation = new EfsFileLocationPropertyOutputReference(this, "efs_file_location");
    public get efsFileLocation() {
        return this._efsFileLocation;
    }
    public putEfsFileLocation(value: EfsFileLocationProperty) {
        this._efsFileLocation.internalValue = value;
    }
    public resetEfsFileLocation() {
        this._efsFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsFileLocationInput() {
        return this._efsFileLocation.internalValue;
    }

    // s3_file_location - computed: true, optional: true, required: false
    private _s3FileLocation = new StepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference(this, "s3_file_location");
    public get s3FileLocation() {
        return this._s3FileLocation;
    }
    public putS3FileLocation(value: StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty) {
        this._s3FileLocation.internalValue = value;
    }
    public resetS3FileLocation() {
        this._s3FileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileLocationInput() {
        return this._s3FileLocation.internalValue;
    }
}
export interface StepsDecryptStepDetailsProperty {
    /**
    * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#destination_file_location CcWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: StepsDecryptStepDetailsDestinationFileLocationProperty;
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#overwrite_existing CcWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Specifies which encryption method to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#type CcWorkflow#type}
    */
    readonly type?: string;
}
export class StepsDecryptStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsDecryptStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._overwriteExisting !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwriteExisting = this._overwriteExisting;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsDecryptStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = undefined;
            this._name = undefined;
            this._overwriteExisting = undefined;
            this._sourceFileLocation = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationFileLocation.internalValue = value.destinationFileLocation;
            this._name = value.name;
            this._overwriteExisting = value.overwriteExisting;
            this._sourceFileLocation = value.sourceFileLocation;
            this._type = value.type;
        }
    }

    // destination_file_location - computed: true, optional: true, required: false
    private _destinationFileLocation = new StepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference(this, "destination_file_location");
    public get destinationFileLocation() {
        return this._destinationFileLocation;
    }
    public putDestinationFileLocation(value: StepsDecryptStepDetailsDestinationFileLocationProperty) {
        this._destinationFileLocation.internalValue = value;
    }
    public resetDestinationFileLocation() {
        this._destinationFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationFileLocationInput() {
        return this._destinationFileLocation.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // overwrite_existing - computed: true, optional: true, required: false
    private _overwriteExisting?: string; 
    public get overwriteExisting() {
        return this.getStringAttribute('overwrite_existing');
    }
    public set overwriteExisting(value: string) {
        this._overwriteExisting = value;
    }
    public resetOverwriteExisting() {
        this._overwriteExisting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteExistingInput() {
        return this._overwriteExisting;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface StepsDeleteStepDetailsProperty {
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
}
export class StepsDeleteStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsDeleteStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsDeleteStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sourceFileLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sourceFileLocation = value.sourceFileLocation;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }
}
export interface TagsProperty {
    /**
    * The name assigned to the tag that you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#key CcWorkflow#key}
    */
    readonly key?: string;
    /**
    * The value that corresponds to the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#value CcWorkflow#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StepsTagStepDetailsProperty {
    /**
    * The name of the step, used as an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * Specifies which file to use as input to the workflow step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#source_file_location CcWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Array that contains from 1 to 10 key/value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#tags CcWorkflow#tags}
    */
    readonly tags?: TagsProperty[] | cdktn.IResolvable;
}
export class StepsTagStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepsTagStepDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sourceFileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFileLocation = this._sourceFileLocation;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsTagStepDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sourceFileLocation = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sourceFileLocation = value.sourceFileLocation;
            this._tags.internalValue = value.tags;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // source_file_location - computed: true, optional: true, required: false
    private _sourceFileLocation?: string; 
    public get sourceFileLocation() {
        return this.getStringAttribute('source_file_location');
    }
    public set sourceFileLocation(value: string) {
        this._sourceFileLocation = value;
    }
    public resetSourceFileLocation() {
        this._sourceFileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFileLocationInput() {
        return this._sourceFileLocation;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface StepsProperty {
    /**
    * Details for a step that performs a file copy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#copy_step_details CcWorkflow#copy_step_details}
    */
    readonly copyStepDetails?: StepsCopyStepDetailsProperty;
    /**
    * Details for a step that invokes a lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#custom_step_details CcWorkflow#custom_step_details}
    */
    readonly customStepDetails?: StepsCustomStepDetailsProperty;
    /**
    * Details for a step that performs a file decryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#decrypt_step_details CcWorkflow#decrypt_step_details}
    */
    readonly decryptStepDetails?: StepsDecryptStepDetailsProperty;
    /**
    * Details for a step that deletes the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#delete_step_details CcWorkflow#delete_step_details}
    */
    readonly deleteStepDetails?: StepsDeleteStepDetailsProperty;
    /**
    * Details for a step that creates one or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#tag_step_details CcWorkflow#tag_step_details}
    */
    readonly tagStepDetails?: StepsTagStepDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#type CcWorkflow#type}
    */
    readonly type?: string;
}
export class StepsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StepsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
        }
        if (this._customStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
        }
        if (this._decryptStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
        }
        if (this._deleteStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
        }
        if (this._tagStepDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyStepDetails.internalValue = undefined;
            this._customStepDetails.internalValue = undefined;
            this._decryptStepDetails.internalValue = undefined;
            this._deleteStepDetails.internalValue = undefined;
            this._tagStepDetails.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyStepDetails.internalValue = value.copyStepDetails;
            this._customStepDetails.internalValue = value.customStepDetails;
            this._decryptStepDetails.internalValue = value.decryptStepDetails;
            this._deleteStepDetails.internalValue = value.deleteStepDetails;
            this._tagStepDetails.internalValue = value.tagStepDetails;
            this._type = value.type;
        }
    }

    // copy_step_details - computed: true, optional: true, required: false
    private _copyStepDetails = new StepsCopyStepDetailsPropertyOutputReference(this, "copy_step_details");
    public get copyStepDetails() {
        return this._copyStepDetails;
    }
    public putCopyStepDetails(value: StepsCopyStepDetailsProperty) {
        this._copyStepDetails.internalValue = value;
    }
    public resetCopyStepDetails() {
        this._copyStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyStepDetailsInput() {
        return this._copyStepDetails.internalValue;
    }

    // custom_step_details - computed: true, optional: true, required: false
    private _customStepDetails = new StepsCustomStepDetailsPropertyOutputReference(this, "custom_step_details");
    public get customStepDetails() {
        return this._customStepDetails;
    }
    public putCustomStepDetails(value: StepsCustomStepDetailsProperty) {
        this._customStepDetails.internalValue = value;
    }
    public resetCustomStepDetails() {
        this._customStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customStepDetailsInput() {
        return this._customStepDetails.internalValue;
    }

    // decrypt_step_details - computed: true, optional: true, required: false
    private _decryptStepDetails = new StepsDecryptStepDetailsPropertyOutputReference(this, "decrypt_step_details");
    public get decryptStepDetails() {
        return this._decryptStepDetails;
    }
    public putDecryptStepDetails(value: StepsDecryptStepDetailsProperty) {
        this._decryptStepDetails.internalValue = value;
    }
    public resetDecryptStepDetails() {
        this._decryptStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptStepDetailsInput() {
        return this._decryptStepDetails.internalValue;
    }

    // delete_step_details - computed: true, optional: true, required: false
    private _deleteStepDetails = new StepsDeleteStepDetailsPropertyOutputReference(this, "delete_step_details");
    public get deleteStepDetails() {
        return this._deleteStepDetails;
    }
    public putDeleteStepDetails(value: StepsDeleteStepDetailsProperty) {
        this._deleteStepDetails.internalValue = value;
    }
    public resetDeleteStepDetails() {
        this._deleteStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteStepDetailsInput() {
        return this._deleteStepDetails.internalValue;
    }

    // tag_step_details - computed: true, optional: true, required: false
    private _tagStepDetails = new StepsTagStepDetailsPropertyOutputReference(this, "tag_step_details");
    public get tagStepDetails() {
        return this._tagStepDetails;
    }
    public putTagStepDetails(value: StepsTagStepDetailsProperty) {
        this._tagStepDetails.internalValue = value;
    }
    public resetTagStepDetails() {
        this._tagStepDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagStepDetailsInput() {
        return this._tagStepDetails.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class StepsPropertyList extends cdktn.ComplexList {
    public internalValue? : StepsProperty[] | cdktn.IResolvable

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
    public get(index: number): StepsPropertyOutputReference {
        return new StepsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The name assigned to the tag that you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#key CcWorkflow#key}
    */
    readonly key?: string;
    /**
    * Contains one or more values that you assigned to the key name you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_workflow#value CcWorkflow#value}
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
