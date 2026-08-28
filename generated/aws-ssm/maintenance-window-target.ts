// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMaintenanceWindowTargetProps extends cdktn.TerraformMetaArguments {
    /**
    * A description for the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#description CcMaintenanceWindowTarget#description}
    */
    readonly description?: string;
    /**
    * The name for the maintenance window target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#name CcMaintenanceWindowTarget#name}
    */
    readonly name?: string;
    /**
    * A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#owner_information CcMaintenanceWindowTarget#owner_information}
    */
    readonly ownerInformation?: string;
    /**
    * The type of target that is being registered with the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#resource_type CcMaintenanceWindowTarget#resource_type}
    */
    readonly resourceType: string;
    /**
    * The targets to register with the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#targets CcMaintenanceWindowTarget#targets}
    */
    readonly targets: CcMaintenanceWindowTarget.TargetsProperty[] | cdktn.IResolvable;
    /**
    * The ID of the maintenance window to register the target with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#window_id CcMaintenanceWindowTarget#window_id}
    */
    readonly windowId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target awscc_ssm_maintenance_window_target}
*/
export class CcMaintenanceWindowTarget extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_maintenance_window_target";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMaintenanceWindowTarget resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMaintenanceWindowTarget to import
    * @param importFromId The id of the existing CcMaintenanceWindowTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMaintenanceWindowTarget to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_maintenance_window_target", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target awscc_ssm_maintenance_window_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMaintenanceWindowTargetProps
    */
    public constructor(scope: Construct, id: string, config: CcMaintenanceWindowTargetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_maintenance_window_target',
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
        this._description = config.description;
        this._name = config.name;
        this._ownerInformation = config.ownerInformation;
        this._resourceType = config.resourceType;
        this._targets.internalValue = config.targets;
        this._windowId = config.windowId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // owner_information - computed: true, optional: true, required: false
    private _ownerInformation?: string; 
    public get ownerInformation() {
        return this.getStringAttribute('owner_information');
    }
    public set ownerInformation(value: string) {
        this._ownerInformation = value;
    }
    public resetOwnerInformation() {
        this._ownerInformation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInformationInput() {
        return this._ownerInformation;
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // targets - computed: false, optional: false, required: true
    private _targets = new CcMaintenanceWindowTarget.TargetsPropertyList(this, "targets", false);
    public get targets() {
        return this._targets;
    }
    public putTargets(value: CcMaintenanceWindowTarget.TargetsProperty[] | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // window_id - computed: false, optional: false, required: true
    private _windowId?: string; 
    public get windowId() {
        return this.getStringAttribute('window_id');
    }
    public set windowId(value: string) {
        this._windowId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get windowIdInput() {
        return this._windowId;
    }

    // window_target_id - computed: true, optional: false, required: false
    public get windowTargetId() {
        return this.getStringAttribute('window_target_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            owner_information: cdktn.stringToTerraform(this._ownerInformation),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            targets: cdktn.listMapper(ccMaintenanceWindowTargetTargetsPropertyToTerraform, false)(this._targets.internalValue),
            window_id: cdktn.stringToTerraform(this._windowId),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner_information: {
                value: cdktn.stringToHclTerraform(this._ownerInformation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            targets: {
                value: cdktn.listMapperHcl(ccMaintenanceWindowTargetTargetsPropertyToHclTerraform, false)(this._targets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMaintenanceWindowTarget.TargetsPropertyList",
            },
            window_id: {
                value: cdktn.stringToHclTerraform(this._windowId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMaintenanceWindowTargetTargetsPropertyToTerraform(struct?: CcMaintenanceWindowTarget.TargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMaintenanceWindowTargetTargetsPropertyToHclTerraform(struct?: CcMaintenanceWindowTarget.TargetsProperty | cdktn.IResolvable): any {
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMaintenanceWindowTarget {
export interface TargetsProperty {
    /**
    * User-defined criteria for sending commands that target managed nodes that meet the criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#key CcMaintenanceWindowTarget#key}
    */
    readonly key: string;
    /**
    * User-defined criteria that maps to Key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_maintenance_window_target#values CcMaintenanceWindowTarget#values}
    */
    readonly values: string[];
}
export class TargetsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._values = value.values;
        }
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // values - computed: false, optional: false, required: true
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class TargetsPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetsProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetsPropertyOutputReference {
        return new TargetsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
