// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcThreatEntitySetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#activate CcThreatEntitySet#activate}
    */
    readonly activate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#detector_id CcThreatEntitySet#detector_id}
    */
    readonly detectorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#expected_bucket_owner CcThreatEntitySet#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#format CcThreatEntitySet#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#location CcThreatEntitySet#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#name CcThreatEntitySet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#tags CcThreatEntitySet#tags}
    */
    readonly tags?: CcThreatEntitySet.TagItemProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set awscc_guardduty_threat_entity_set}
*/
export class CcThreatEntitySet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_guardduty_threat_entity_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcThreatEntitySet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcThreatEntitySet to import
    * @param importFromId The id of the existing CcThreatEntitySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcThreatEntitySet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_guardduty_threat_entity_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set awscc_guardduty_threat_entity_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcThreatEntitySetProps
    */
    public constructor(scope: Construct, id: string, config: CcThreatEntitySetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_guardduty_threat_entity_set',
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
        this._activate = config.activate;
        this._detectorId = config.detectorId;
        this._expectedBucketOwner = config.expectedBucketOwner;
        this._format = config.format;
        this._location = config.location;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activate - computed: true, optional: true, required: false
    private _activate?: boolean | cdktn.IResolvable; 
    public get activate() {
        return this.getBooleanAttribute('activate');
    }
    public set activate(value: boolean | cdktn.IResolvable) {
        this._activate = value;
    }
    public resetActivate() {
        this._activate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activateInput() {
        return this._activate;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // detector_id - computed: true, optional: true, required: false
    private _detectorId?: string; 
    public get detectorId() {
        return this.getStringAttribute('detector_id');
    }
    public set detectorId(value: string) {
        this._detectorId = value;
    }
    public resetDetectorId() {
        this._detectorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorIdInput() {
        return this._detectorId;
    }

    // error_details - computed: true, optional: false, required: false
    public get errorDetails() {
        return this.getStringAttribute('error_details');
    }

    // expected_bucket_owner - computed: true, optional: true, required: false
    private _expectedBucketOwner?: string; 
    public get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string) {
        this._expectedBucketOwner = value;
    }
    public resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // location - computed: false, optional: false, required: true
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcThreatEntitySet.TagItemPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcThreatEntitySet.TagItemProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // threat_entity_set_id - computed: true, optional: false, required: false
    public get threatEntitySetId() {
        return this.getStringAttribute('threat_entity_set_id');
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
            activate: cdktn.booleanToTerraform(this._activate),
            detector_id: cdktn.stringToTerraform(this._detectorId),
            expected_bucket_owner: cdktn.stringToTerraform(this._expectedBucketOwner),
            format: cdktn.stringToTerraform(this._format),
            location: cdktn.stringToTerraform(this._location),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccThreatEntitySetTagItemPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            activate: {
                value: cdktn.booleanToHclTerraform(this._activate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            detector_id: {
                value: cdktn.stringToHclTerraform(this._detectorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expected_bucket_owner: {
                value: cdktn.stringToHclTerraform(this._expectedBucketOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            format: {
                value: cdktn.stringToHclTerraform(this._format),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location: {
                value: cdktn.stringToHclTerraform(this._location),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccThreatEntitySetTagItemPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcThreatEntitySet.TagItemPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccThreatEntitySetTagItemPropertyToTerraform(struct?: CcThreatEntitySet.TagItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccThreatEntitySetTagItemPropertyToHclTerraform(struct?: CcThreatEntitySet.TagItemProperty | cdktn.IResolvable): any {
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


export namespace CcThreatEntitySet {
export interface TagItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#key CcThreatEntitySet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_threat_entity_set#value CcThreatEntitySet#value}
    */
    readonly value?: string;
}
export class TagItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagItemProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagItemProperty | cdktn.IResolvable | undefined) {
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

export class TagItemPropertyList extends cdktn.ComplexList {
    public internalValue? : TagItemProperty[] | cdktn.IResolvable

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
    public get(index: number): TagItemPropertyOutputReference {
        return new TagItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
