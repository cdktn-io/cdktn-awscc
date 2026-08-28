// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserHierarchyStructureProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#instance_arn CcUserHierarchyStructure#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Information about the hierarchy structure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#user_hierarchy_structure CcUserHierarchyStructure#user_hierarchy_structure}
    */
    readonly userHierarchyStructure?: CcUserHierarchyStructure.UserHierarchyStructureProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}
*/
export class CcUserHierarchyStructure extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_user_hierarchy_structure";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserHierarchyStructure resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserHierarchyStructure to import
    * @param importFromId The id of the existing CcUserHierarchyStructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserHierarchyStructure to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_user_hierarchy_structure", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserHierarchyStructureProps
    */
    public constructor(scope: Construct, id: string, config: CcUserHierarchyStructureProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_user_hierarchy_structure',
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
        this._instanceArn = config.instanceArn;
        this._userHierarchyStructure.internalValue = config.userHierarchyStructure;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // user_hierarchy_structure - computed: true, optional: true, required: false
    private _userHierarchyStructure = new CcUserHierarchyStructure.UserHierarchyStructurePropertyOutputReference(this, "user_hierarchy_structure");
    public get userHierarchyStructure() {
        return this._userHierarchyStructure;
    }
    public putUserHierarchyStructure(value: CcUserHierarchyStructure.UserHierarchyStructureProperty) {
        this._userHierarchyStructure.internalValue = value;
    }
    public resetUserHierarchyStructure() {
        this._userHierarchyStructure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userHierarchyStructureInput() {
        return this._userHierarchyStructure.internalValue;
    }

    // user_hierarchy_structure_arn - computed: true, optional: false, required: false
    public get userHierarchyStructureArn() {
        return this.getStringAttribute('user_hierarchy_structure_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            user_hierarchy_structure: ccUserHierarchyStructureUserHierarchyStructurePropertyToTerraform(this._userHierarchyStructure.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_hierarchy_structure: {
                value: ccUserHierarchyStructureUserHierarchyStructurePropertyToHclTerraform(this._userHierarchyStructure.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserHierarchyStructure.UserHierarchyStructureProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserHierarchyStructureLevelFivePropertyToTerraform(struct?: CcUserHierarchyStructure.LevelFiveProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_level_arn: cdktn.stringToTerraform(struct!.hierarchyLevelArn),
        hierarchy_level_id: cdktn.stringToTerraform(struct!.hierarchyLevelId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccUserHierarchyStructureLevelFivePropertyToHclTerraform(struct?: CcUserHierarchyStructure.LevelFiveProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_level_arn: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_level_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserHierarchyStructureLevelFourPropertyToTerraform(struct?: CcUserHierarchyStructure.LevelFourProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_level_arn: cdktn.stringToTerraform(struct!.hierarchyLevelArn),
        hierarchy_level_id: cdktn.stringToTerraform(struct!.hierarchyLevelId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccUserHierarchyStructureLevelFourPropertyToHclTerraform(struct?: CcUserHierarchyStructure.LevelFourProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_level_arn: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_level_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserHierarchyStructureLevelOnePropertyToTerraform(struct?: CcUserHierarchyStructure.LevelOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_level_arn: cdktn.stringToTerraform(struct!.hierarchyLevelArn),
        hierarchy_level_id: cdktn.stringToTerraform(struct!.hierarchyLevelId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccUserHierarchyStructureLevelOnePropertyToHclTerraform(struct?: CcUserHierarchyStructure.LevelOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_level_arn: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_level_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserHierarchyStructureLevelThreePropertyToTerraform(struct?: CcUserHierarchyStructure.LevelThreeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_level_arn: cdktn.stringToTerraform(struct!.hierarchyLevelArn),
        hierarchy_level_id: cdktn.stringToTerraform(struct!.hierarchyLevelId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccUserHierarchyStructureLevelThreePropertyToHclTerraform(struct?: CcUserHierarchyStructure.LevelThreeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_level_arn: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_level_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserHierarchyStructureLevelTwoPropertyToTerraform(struct?: CcUserHierarchyStructure.LevelTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_level_arn: cdktn.stringToTerraform(struct!.hierarchyLevelArn),
        hierarchy_level_id: cdktn.stringToTerraform(struct!.hierarchyLevelId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccUserHierarchyStructureLevelTwoPropertyToHclTerraform(struct?: CcUserHierarchyStructure.LevelTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_level_arn: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_level_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLevelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserHierarchyStructureUserHierarchyStructurePropertyToTerraform(struct?: CcUserHierarchyStructure.UserHierarchyStructureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        level_five: ccUserHierarchyStructureLevelFivePropertyToTerraform(struct!.levelFive),
        level_four: ccUserHierarchyStructureLevelFourPropertyToTerraform(struct!.levelFour),
        level_one: ccUserHierarchyStructureLevelOnePropertyToTerraform(struct!.levelOne),
        level_three: ccUserHierarchyStructureLevelThreePropertyToTerraform(struct!.levelThree),
        level_two: ccUserHierarchyStructureLevelTwoPropertyToTerraform(struct!.levelTwo),
    }
}


export function ccUserHierarchyStructureUserHierarchyStructurePropertyToHclTerraform(struct?: CcUserHierarchyStructure.UserHierarchyStructureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        level_five: {
            value: ccUserHierarchyStructureLevelFivePropertyToHclTerraform(struct!.levelFive),
            isBlock: true,
            type: "struct",
            storageClassType: "LevelFiveProperty",
        },
        level_four: {
            value: ccUserHierarchyStructureLevelFourPropertyToHclTerraform(struct!.levelFour),
            isBlock: true,
            type: "struct",
            storageClassType: "LevelFourProperty",
        },
        level_one: {
            value: ccUserHierarchyStructureLevelOnePropertyToHclTerraform(struct!.levelOne),
            isBlock: true,
            type: "struct",
            storageClassType: "LevelOneProperty",
        },
        level_three: {
            value: ccUserHierarchyStructureLevelThreePropertyToHclTerraform(struct!.levelThree),
            isBlock: true,
            type: "struct",
            storageClassType: "LevelThreeProperty",
        },
        level_two: {
            value: ccUserHierarchyStructureLevelTwoPropertyToHclTerraform(struct!.levelTwo),
            isBlock: true,
            type: "struct",
            storageClassType: "LevelTwoProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserHierarchyStructure {
export interface LevelFiveProperty {
    /**
    * The Amazon Resource Name (ARN) of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn CcUserHierarchyStructure#hierarchy_level_arn}
    */
    readonly hierarchyLevelArn?: string;
    /**
    * The identifier of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id CcUserHierarchyStructure#hierarchy_level_id}
    */
    readonly hierarchyLevelId?: string;
    /**
    * The name of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#name CcUserHierarchyStructure#name}
    */
    readonly name?: string;
}
export class LevelFivePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LevelFiveProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyLevelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelArn = this._hierarchyLevelArn;
        }
        if (this._hierarchyLevelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelId = this._hierarchyLevelId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LevelFiveProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = undefined;
            this._hierarchyLevelId = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = value.hierarchyLevelArn;
            this._hierarchyLevelId = value.hierarchyLevelId;
            this._name = value.name;
        }
    }

    // hierarchy_level_arn - computed: true, optional: true, required: false
    private _hierarchyLevelArn?: string; 
    public get hierarchyLevelArn() {
        return this.getStringAttribute('hierarchy_level_arn');
    }
    public set hierarchyLevelArn(value: string) {
        this._hierarchyLevelArn = value;
    }
    public resetHierarchyLevelArn() {
        this._hierarchyLevelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelArnInput() {
        return this._hierarchyLevelArn;
    }

    // hierarchy_level_id - computed: true, optional: true, required: false
    private _hierarchyLevelId?: string; 
    public get hierarchyLevelId() {
        return this.getStringAttribute('hierarchy_level_id');
    }
    public set hierarchyLevelId(value: string) {
        this._hierarchyLevelId = value;
    }
    public resetHierarchyLevelId() {
        this._hierarchyLevelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelIdInput() {
        return this._hierarchyLevelId;
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
}
export interface LevelFourProperty {
    /**
    * The Amazon Resource Name (ARN) of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn CcUserHierarchyStructure#hierarchy_level_arn}
    */
    readonly hierarchyLevelArn?: string;
    /**
    * The identifier of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id CcUserHierarchyStructure#hierarchy_level_id}
    */
    readonly hierarchyLevelId?: string;
    /**
    * The name of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#name CcUserHierarchyStructure#name}
    */
    readonly name?: string;
}
export class LevelFourPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LevelFourProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyLevelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelArn = this._hierarchyLevelArn;
        }
        if (this._hierarchyLevelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelId = this._hierarchyLevelId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LevelFourProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = undefined;
            this._hierarchyLevelId = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = value.hierarchyLevelArn;
            this._hierarchyLevelId = value.hierarchyLevelId;
            this._name = value.name;
        }
    }

    // hierarchy_level_arn - computed: true, optional: true, required: false
    private _hierarchyLevelArn?: string; 
    public get hierarchyLevelArn() {
        return this.getStringAttribute('hierarchy_level_arn');
    }
    public set hierarchyLevelArn(value: string) {
        this._hierarchyLevelArn = value;
    }
    public resetHierarchyLevelArn() {
        this._hierarchyLevelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelArnInput() {
        return this._hierarchyLevelArn;
    }

    // hierarchy_level_id - computed: true, optional: true, required: false
    private _hierarchyLevelId?: string; 
    public get hierarchyLevelId() {
        return this.getStringAttribute('hierarchy_level_id');
    }
    public set hierarchyLevelId(value: string) {
        this._hierarchyLevelId = value;
    }
    public resetHierarchyLevelId() {
        this._hierarchyLevelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelIdInput() {
        return this._hierarchyLevelId;
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
}
export interface LevelOneProperty {
    /**
    * The Amazon Resource Name (ARN) of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn CcUserHierarchyStructure#hierarchy_level_arn}
    */
    readonly hierarchyLevelArn?: string;
    /**
    * The identifier of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id CcUserHierarchyStructure#hierarchy_level_id}
    */
    readonly hierarchyLevelId?: string;
    /**
    * The name of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#name CcUserHierarchyStructure#name}
    */
    readonly name?: string;
}
export class LevelOnePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LevelOneProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyLevelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelArn = this._hierarchyLevelArn;
        }
        if (this._hierarchyLevelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelId = this._hierarchyLevelId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LevelOneProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = undefined;
            this._hierarchyLevelId = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = value.hierarchyLevelArn;
            this._hierarchyLevelId = value.hierarchyLevelId;
            this._name = value.name;
        }
    }

    // hierarchy_level_arn - computed: true, optional: true, required: false
    private _hierarchyLevelArn?: string; 
    public get hierarchyLevelArn() {
        return this.getStringAttribute('hierarchy_level_arn');
    }
    public set hierarchyLevelArn(value: string) {
        this._hierarchyLevelArn = value;
    }
    public resetHierarchyLevelArn() {
        this._hierarchyLevelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelArnInput() {
        return this._hierarchyLevelArn;
    }

    // hierarchy_level_id - computed: true, optional: true, required: false
    private _hierarchyLevelId?: string; 
    public get hierarchyLevelId() {
        return this.getStringAttribute('hierarchy_level_id');
    }
    public set hierarchyLevelId(value: string) {
        this._hierarchyLevelId = value;
    }
    public resetHierarchyLevelId() {
        this._hierarchyLevelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelIdInput() {
        return this._hierarchyLevelId;
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
}
export interface LevelThreeProperty {
    /**
    * The Amazon Resource Name (ARN) of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn CcUserHierarchyStructure#hierarchy_level_arn}
    */
    readonly hierarchyLevelArn?: string;
    /**
    * The identifier of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id CcUserHierarchyStructure#hierarchy_level_id}
    */
    readonly hierarchyLevelId?: string;
    /**
    * The name of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#name CcUserHierarchyStructure#name}
    */
    readonly name?: string;
}
export class LevelThreePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LevelThreeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyLevelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelArn = this._hierarchyLevelArn;
        }
        if (this._hierarchyLevelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelId = this._hierarchyLevelId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LevelThreeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = undefined;
            this._hierarchyLevelId = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = value.hierarchyLevelArn;
            this._hierarchyLevelId = value.hierarchyLevelId;
            this._name = value.name;
        }
    }

    // hierarchy_level_arn - computed: true, optional: true, required: false
    private _hierarchyLevelArn?: string; 
    public get hierarchyLevelArn() {
        return this.getStringAttribute('hierarchy_level_arn');
    }
    public set hierarchyLevelArn(value: string) {
        this._hierarchyLevelArn = value;
    }
    public resetHierarchyLevelArn() {
        this._hierarchyLevelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelArnInput() {
        return this._hierarchyLevelArn;
    }

    // hierarchy_level_id - computed: true, optional: true, required: false
    private _hierarchyLevelId?: string; 
    public get hierarchyLevelId() {
        return this.getStringAttribute('hierarchy_level_id');
    }
    public set hierarchyLevelId(value: string) {
        this._hierarchyLevelId = value;
    }
    public resetHierarchyLevelId() {
        this._hierarchyLevelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelIdInput() {
        return this._hierarchyLevelId;
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
}
export interface LevelTwoProperty {
    /**
    * The Amazon Resource Name (ARN) of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn CcUserHierarchyStructure#hierarchy_level_arn}
    */
    readonly hierarchyLevelArn?: string;
    /**
    * The identifier of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id CcUserHierarchyStructure#hierarchy_level_id}
    */
    readonly hierarchyLevelId?: string;
    /**
    * The name of the hierarchy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#name CcUserHierarchyStructure#name}
    */
    readonly name?: string;
}
export class LevelTwoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LevelTwoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyLevelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelArn = this._hierarchyLevelArn;
        }
        if (this._hierarchyLevelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLevelId = this._hierarchyLevelId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LevelTwoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = undefined;
            this._hierarchyLevelId = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyLevelArn = value.hierarchyLevelArn;
            this._hierarchyLevelId = value.hierarchyLevelId;
            this._name = value.name;
        }
    }

    // hierarchy_level_arn - computed: true, optional: true, required: false
    private _hierarchyLevelArn?: string; 
    public get hierarchyLevelArn() {
        return this.getStringAttribute('hierarchy_level_arn');
    }
    public set hierarchyLevelArn(value: string) {
        this._hierarchyLevelArn = value;
    }
    public resetHierarchyLevelArn() {
        this._hierarchyLevelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelArnInput() {
        return this._hierarchyLevelArn;
    }

    // hierarchy_level_id - computed: true, optional: true, required: false
    private _hierarchyLevelId?: string; 
    public get hierarchyLevelId() {
        return this.getStringAttribute('hierarchy_level_id');
    }
    public set hierarchyLevelId(value: string) {
        this._hierarchyLevelId = value;
    }
    public resetHierarchyLevelId() {
        this._hierarchyLevelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLevelIdInput() {
        return this._hierarchyLevelId;
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
}
export interface UserHierarchyStructureProperty {
    /**
    * Information about level five.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#level_five CcUserHierarchyStructure#level_five}
    */
    readonly levelFive?: LevelFiveProperty;
    /**
    * Information about level four.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#level_four CcUserHierarchyStructure#level_four}
    */
    readonly levelFour?: LevelFourProperty;
    /**
    * Information about level one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#level_one CcUserHierarchyStructure#level_one}
    */
    readonly levelOne?: LevelOneProperty;
    /**
    * Information about level three.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#level_three CcUserHierarchyStructure#level_three}
    */
    readonly levelThree?: LevelThreeProperty;
    /**
    * Information about level two.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_user_hierarchy_structure#level_two CcUserHierarchyStructure#level_two}
    */
    readonly levelTwo?: LevelTwoProperty;
}
export class UserHierarchyStructurePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserHierarchyStructureProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._levelFive?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.levelFive = this._levelFive?.internalValue;
        }
        if (this._levelFour?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.levelFour = this._levelFour?.internalValue;
        }
        if (this._levelOne?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.levelOne = this._levelOne?.internalValue;
        }
        if (this._levelThree?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.levelThree = this._levelThree?.internalValue;
        }
        if (this._levelTwo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.levelTwo = this._levelTwo?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserHierarchyStructureProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._levelFive.internalValue = undefined;
            this._levelFour.internalValue = undefined;
            this._levelOne.internalValue = undefined;
            this._levelThree.internalValue = undefined;
            this._levelTwo.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._levelFive.internalValue = value.levelFive;
            this._levelFour.internalValue = value.levelFour;
            this._levelOne.internalValue = value.levelOne;
            this._levelThree.internalValue = value.levelThree;
            this._levelTwo.internalValue = value.levelTwo;
        }
    }

    // level_five - computed: true, optional: true, required: false
    private _levelFive = new LevelFivePropertyOutputReference(this, "level_five");
    public get levelFive() {
        return this._levelFive;
    }
    public putLevelFive(value: LevelFiveProperty) {
        this._levelFive.internalValue = value;
    }
    public resetLevelFive() {
        this._levelFive.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelFiveInput() {
        return this._levelFive.internalValue;
    }

    // level_four - computed: true, optional: true, required: false
    private _levelFour = new LevelFourPropertyOutputReference(this, "level_four");
    public get levelFour() {
        return this._levelFour;
    }
    public putLevelFour(value: LevelFourProperty) {
        this._levelFour.internalValue = value;
    }
    public resetLevelFour() {
        this._levelFour.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelFourInput() {
        return this._levelFour.internalValue;
    }

    // level_one - computed: true, optional: true, required: false
    private _levelOne = new LevelOnePropertyOutputReference(this, "level_one");
    public get levelOne() {
        return this._levelOne;
    }
    public putLevelOne(value: LevelOneProperty) {
        this._levelOne.internalValue = value;
    }
    public resetLevelOne() {
        this._levelOne.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelOneInput() {
        return this._levelOne.internalValue;
    }

    // level_three - computed: true, optional: true, required: false
    private _levelThree = new LevelThreePropertyOutputReference(this, "level_three");
    public get levelThree() {
        return this._levelThree;
    }
    public putLevelThree(value: LevelThreeProperty) {
        this._levelThree.internalValue = value;
    }
    public resetLevelThree() {
        this._levelThree.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelThreeInput() {
        return this._levelThree.internalValue;
    }

    // level_two - computed: true, optional: true, required: false
    private _levelTwo = new LevelTwoPropertyOutputReference(this, "level_two");
    public get levelTwo() {
        return this._levelTwo;
    }
    public putLevelTwo(value: LevelTwoProperty) {
        this._levelTwo.internalValue = value;
    }
    public resetLevelTwo() {
        this._levelTwo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelTwoInput() {
        return this._levelTwo.internalValue;
    }
}
}
