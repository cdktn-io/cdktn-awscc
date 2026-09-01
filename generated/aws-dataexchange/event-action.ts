// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventActionProps extends cdktn.TerraformMetaArguments {
    /**
    * What occurs after a certain event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#action CcEventAction#action}
    */
    readonly action: CcEventAction.ActionProperty;
    /**
    * What occurs to start an action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#event CcEventAction#event}
    */
    readonly event: CcEventAction.EventProperty;
    /**
    * The tags for the event action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#tags CcEventAction#tags}
    */
    readonly tags?: CcEventAction.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action awscc_dataexchange_event_action}
*/
export class CcEventAction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dataexchange_event_action";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventAction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventAction to import
    * @param importFromId The id of the existing CcEventAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventAction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dataexchange_event_action", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action awscc_dataexchange_event_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventActionProps
    */
    public constructor(scope: Construct, id: string, config: CcEventActionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dataexchange_event_action',
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
        this._action.internalValue = config.action;
        this._event.internalValue = config.event;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action = new CcEventAction.ActionPropertyOutputReference(this, "action");
    public get action() {
        return this._action;
    }
    public putAction(value: CcEventAction.ActionProperty) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // event - computed: false, optional: false, required: true
    private _event = new CcEventAction.EventPropertyOutputReference(this, "event");
    public get event() {
        return this._event;
    }
    public putEvent(value: CcEventAction.EventProperty) {
        this._event.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventInput() {
        return this._event.internalValue;
    }

    // event_action_id - computed: true, optional: false, required: false
    public get eventActionId() {
        return this.getStringAttribute('event_action_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventAction.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventAction.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: ccEventActionActionPropertyToTerraform(this._action.internalValue),
            event: ccEventActionEventPropertyToTerraform(this._event.internalValue),
            tags: cdktn.listMapper(ccEventActionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: ccEventActionActionPropertyToHclTerraform(this._action.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventAction.ActionProperty",
            },
            event: {
                value: ccEventActionEventPropertyToHclTerraform(this._event.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventAction.EventProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventActionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEventAction.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventActionExportServerSideEncryptionPropertyToTerraform(struct?: CcEventAction.ExportServerSideEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccEventActionExportServerSideEncryptionPropertyToHclTerraform(struct?: CcEventAction.ExportServerSideEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
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


export function ccEventActionAutoExportRevisionDestinationEntryPropertyToTerraform(struct?: CcEventAction.AutoExportRevisionDestinationEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key_pattern: cdktn.stringToTerraform(struct!.keyPattern),
    }
}


export function ccEventActionAutoExportRevisionDestinationEntryPropertyToHclTerraform(struct?: CcEventAction.AutoExportRevisionDestinationEntryProperty | cdktn.IResolvable): any {
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
        key_pattern: {
            value: cdktn.stringToHclTerraform(struct!.keyPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventActionAutoExportRevisionToS3RequestDetailsPropertyToTerraform(struct?: CcEventAction.AutoExportRevisionToS3RequestDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption: ccEventActionExportServerSideEncryptionPropertyToTerraform(struct!.encryption),
        revision_destination: ccEventActionAutoExportRevisionDestinationEntryPropertyToTerraform(struct!.revisionDestination),
    }
}


export function ccEventActionAutoExportRevisionToS3RequestDetailsPropertyToHclTerraform(struct?: CcEventAction.AutoExportRevisionToS3RequestDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption: {
            value: ccEventActionExportServerSideEncryptionPropertyToHclTerraform(struct!.encryption),
            isBlock: true,
            type: "struct",
            storageClassType: "ExportServerSideEncryptionProperty",
        },
        revision_destination: {
            value: ccEventActionAutoExportRevisionDestinationEntryPropertyToHclTerraform(struct!.revisionDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoExportRevisionDestinationEntryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventActionActionPropertyToTerraform(struct?: CcEventAction.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        export_revision_to_s3: ccEventActionAutoExportRevisionToS3RequestDetailsPropertyToTerraform(struct!.exportRevisionToS3),
    }
}


export function ccEventActionActionPropertyToHclTerraform(struct?: CcEventAction.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        export_revision_to_s3: {
            value: ccEventActionAutoExportRevisionToS3RequestDetailsPropertyToHclTerraform(struct!.exportRevisionToS3),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoExportRevisionToS3RequestDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventActionRevisionPublishedPropertyToTerraform(struct?: CcEventAction.RevisionPublishedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_set_id: cdktn.stringToTerraform(struct!.dataSetId),
    }
}


export function ccEventActionRevisionPublishedPropertyToHclTerraform(struct?: CcEventAction.RevisionPublishedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_set_id: {
            value: cdktn.stringToHclTerraform(struct!.dataSetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventActionEventPropertyToTerraform(struct?: CcEventAction.EventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        revision_published: ccEventActionRevisionPublishedPropertyToTerraform(struct!.revisionPublished),
    }
}


export function ccEventActionEventPropertyToHclTerraform(struct?: CcEventAction.EventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        revision_published: {
            value: ccEventActionRevisionPublishedPropertyToHclTerraform(struct!.revisionPublished),
            isBlock: true,
            type: "struct",
            storageClassType: "RevisionPublishedProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventActionTagPropertyToTerraform(struct?: CcEventAction.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventActionTagPropertyToHclTerraform(struct?: CcEventAction.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEventAction {
export interface ExportServerSideEncryptionProperty {
    /**
    * The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#kms_key_arn CcEventAction#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The type of server side encryption used for encrypting the objects in Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#type CcEventAction#type}
    */
    readonly type?: string;
}
export class ExportServerSideEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExportServerSideEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExportServerSideEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
            this._type = value.type;
        }
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
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
export interface AutoExportRevisionDestinationEntryProperty {
    /**
    * The Amazon S3 bucket that is the destination for the event action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#bucket CcEventAction#bucket}
    */
    readonly bucket?: string;
    /**
    * A string representing the pattern for generated names of the individual assets in the revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#key_pattern CcEventAction#key_pattern}
    */
    readonly keyPattern?: string;
}
export class AutoExportRevisionDestinationEntryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoExportRevisionDestinationEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._keyPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyPattern = this._keyPattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoExportRevisionDestinationEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._keyPattern = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._keyPattern = value.keyPattern;
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

    // key_pattern - computed: true, optional: true, required: false
    private _keyPattern?: string; 
    public get keyPattern() {
        return this.getStringAttribute('key_pattern');
    }
    public set keyPattern(value: string) {
        this._keyPattern = value;
    }
    public resetKeyPattern() {
        this._keyPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPatternInput() {
        return this._keyPattern;
    }
}
export interface AutoExportRevisionToS3RequestDetailsProperty {
    /**
    * Encryption configuration of the export job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#encryption CcEventAction#encryption}
    */
    readonly encryption?: ExportServerSideEncryptionProperty;
    /**
    * A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_destination CcEventAction#revision_destination}
    */
    readonly revisionDestination?: AutoExportRevisionDestinationEntryProperty;
}
export class AutoExportRevisionToS3RequestDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoExportRevisionToS3RequestDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryption = this._encryption?.internalValue;
        }
        if (this._revisionDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.revisionDestination = this._revisionDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoExportRevisionToS3RequestDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryption.internalValue = undefined;
            this._revisionDestination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryption.internalValue = value.encryption;
            this._revisionDestination.internalValue = value.revisionDestination;
        }
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new ExportServerSideEncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: ExportServerSideEncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
    }

    // revision_destination - computed: true, optional: true, required: false
    private _revisionDestination = new AutoExportRevisionDestinationEntryPropertyOutputReference(this, "revision_destination");
    public get revisionDestination() {
        return this._revisionDestination;
    }
    public putRevisionDestination(value: AutoExportRevisionDestinationEntryProperty) {
        this._revisionDestination.internalValue = value;
    }
    public resetRevisionDestination() {
        this._revisionDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionDestinationInput() {
        return this._revisionDestination.internalValue;
    }
}
export interface ActionProperty {
    /**
    * Details of the operation to be performed by the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#export_revision_to_s3 CcEventAction#export_revision_to_s3}
    */
    readonly exportRevisionToS3?: AutoExportRevisionToS3RequestDetailsProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exportRevisionToS3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportRevisionToS3 = this._exportRevisionToS3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exportRevisionToS3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exportRevisionToS3.internalValue = value.exportRevisionToS3;
        }
    }

    // export_revision_to_s3 - computed: true, optional: true, required: false
    private _exportRevisionToS3 = new AutoExportRevisionToS3RequestDetailsPropertyOutputReference(this, "export_revision_to_s3");
    public get exportRevisionToS3() {
        return this._exportRevisionToS3;
    }
    public putExportRevisionToS3(value: AutoExportRevisionToS3RequestDetailsProperty) {
        this._exportRevisionToS3.internalValue = value;
    }
    public resetExportRevisionToS3() {
        this._exportRevisionToS3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportRevisionToS3Input() {
        return this._exportRevisionToS3.internalValue;
    }
}
export interface RevisionPublishedProperty {
    /**
    * The data set ID of the published revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#data_set_id CcEventAction#data_set_id}
    */
    readonly dataSetId?: string;
}
export class RevisionPublishedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RevisionPublishedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSetId = this._dataSetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RevisionPublishedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSetId = value.dataSetId;
        }
    }

    // data_set_id - computed: true, optional: true, required: false
    private _dataSetId?: string; 
    public get dataSetId() {
        return this.getStringAttribute('data_set_id');
    }
    public set dataSetId(value: string) {
        this._dataSetId = value;
    }
    public resetDataSetId() {
        this._dataSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetIdInput() {
        return this._dataSetId;
    }
}
export interface EventProperty {
    /**
    * Information about the published revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_published CcEventAction#revision_published}
    */
    readonly revisionPublished?: RevisionPublishedProperty;
}
export class EventPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._revisionPublished?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.revisionPublished = this._revisionPublished?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._revisionPublished.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._revisionPublished.internalValue = value.revisionPublished;
        }
    }

    // revision_published - computed: true, optional: true, required: false
    private _revisionPublished = new RevisionPublishedPropertyOutputReference(this, "revision_published");
    public get revisionPublished() {
        return this._revisionPublished;
    }
    public putRevisionPublished(value: RevisionPublishedProperty) {
        this._revisionPublished.internalValue = value;
    }
    public resetRevisionPublished() {
        this._revisionPublished.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionPublishedInput() {
        return this._revisionPublished.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#key CcEventAction#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#value CcEventAction#value}
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
