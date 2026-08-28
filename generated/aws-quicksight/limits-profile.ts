// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLimitsProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile#account_id CcLimitsProfile#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile#description CcLimitsProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile#profile_name CcLimitsProfile#profile_name}
    */
    readonly profileName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile#resource_limits CcLimitsProfile#resource_limits}
    */
    readonly resourceLimits: { [key: string]: CcLimitsProfile.ProfileLimitValueProperty } | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile awscc_quicksight_limits_profile}
*/
export class CcLimitsProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_limits_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLimitsProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLimitsProfile to import
    * @param importFromId The id of the existing CcLimitsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLimitsProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_limits_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile awscc_quicksight_limits_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLimitsProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcLimitsProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_limits_profile',
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
        this._accountId = config.accountId;
        this._description = config.description;
        this._profileName = config.profileName;
        this._resourceLimits.internalValue = config.resourceLimits;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // profile_id - computed: true, optional: false, required: false
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }

    // profile_name - computed: false, optional: false, required: true
    private _profileName?: string; 
    public get profileName() {
        return this.getStringAttribute('profile_name');
    }
    public set profileName(value: string) {
        this._profileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileNameInput() {
        return this._profileName;
    }

    // resource_limits - computed: false, optional: false, required: true
    private _resourceLimits = new CcLimitsProfile.ProfileLimitValuePropertyMap(this, "resource_limits");
    public get resourceLimits() {
        return this._resourceLimits;
    }
    public putResourceLimits(value: { [key: string]: CcLimitsProfile.ProfileLimitValueProperty } | cdktn.IResolvable) {
        this._resourceLimits.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLimitsInput() {
        return this._resourceLimits.internalValue;
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
            account_id: cdktn.stringToTerraform(this._accountId),
            description: cdktn.stringToTerraform(this._description),
            profile_name: cdktn.stringToTerraform(this._profileName),
            resource_limits: cdktn.hashMapper(ccLimitsProfileProfileLimitValuePropertyToTerraform)(this._resourceLimits.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_id: {
                value: cdktn.stringToHclTerraform(this._accountId),
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
            profile_name: {
                value: cdktn.stringToHclTerraform(this._profileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_limits: {
                value: cdktn.hashMapperHcl(ccLimitsProfileProfileLimitValuePropertyToHclTerraform)(this._resourceLimits.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcLimitsProfile.ProfileLimitValuePropertyMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLimitsProfileProfileLimitValuePropertyToTerraform(struct?: CcLimitsProfile.ProfileLimitValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccLimitsProfileProfileLimitValuePropertyToHclTerraform(struct?: CcLimitsProfile.ProfileLimitValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLimitsProfile {
export interface ProfileLimitValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile#max_value CcLimitsProfile#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_limits_profile#unit CcLimitsProfile#unit}
    */
    readonly unit?: string;
}
export class ProfileLimitValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProfileLimitValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProfileLimitValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._unit = value.unit;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}

export class ProfileLimitValuePropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ProfileLimitValueProperty } | cdktn.IResolvable

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
    public get(key: string): ProfileLimitValuePropertyOutputReference {
        return new ProfileLimitValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
