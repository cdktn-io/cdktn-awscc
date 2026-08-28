// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityRequirementPackProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the pack
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#description CcSecurityRequirementPack#description}
    */
    readonly description?: string;
    /**
    * KMS key for client-side encryption of pack contents
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#kms_key_id CcSecurityRequirementPack#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Name of the security requirement pack
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#name CcSecurityRequirementPack#name}
    */
    readonly name: string;
    /**
    * Security requirements within this pack
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#security_requirements CcSecurityRequirementPack#security_requirements}
    */
    readonly securityRequirements?: CcSecurityRequirementPack.SecurityRequirementProperty[] | cdktn.IResolvable;
    /**
    * Whether the pack is enabled or disabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#status CcSecurityRequirementPack#status}
    */
    readonly status?: string;
    /**
    * Tags for the security requirement pack
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#tags CcSecurityRequirementPack#tags}
    */
    readonly tags?: CcSecurityRequirementPack.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}
*/
export class CcSecurityRequirementPack extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityagent_security_requirement_pack";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityRequirementPack resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityRequirementPack to import
    * @param importFromId The id of the existing CcSecurityRequirementPack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityRequirementPack to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityagent_security_requirement_pack", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityRequirementPackProps
    */
    public constructor(scope: Construct, id: string, config: CcSecurityRequirementPackProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityagent_security_requirement_pack',
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
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._securityRequirements.internalValue = config.securityRequirements;
        this._status = config.status;
        this._tags.internalValue = config.tags;
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

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // pack_id - computed: true, optional: false, required: false
    public get packId() {
        return this.getStringAttribute('pack_id');
    }

    // security_requirements - computed: true, optional: true, required: false
    private _securityRequirements = new CcSecurityRequirementPack.SecurityRequirementPropertyList(this, "security_requirements", false);
    public get securityRequirements() {
        return this._securityRequirements;
    }
    public putSecurityRequirements(value: CcSecurityRequirementPack.SecurityRequirementProperty[] | cdktn.IResolvable) {
        this._securityRequirements.internalValue = value;
    }
    public resetSecurityRequirements() {
        this._securityRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityRequirementsInput() {
        return this._securityRequirements.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSecurityRequirementPack.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSecurityRequirementPack.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            security_requirements: cdktn.listMapper(ccSecurityRequirementPackSecurityRequirementPropertyToTerraform, false)(this._securityRequirements.internalValue),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccSecurityRequirementPackTagPropertyToTerraform, false)(this._tags.internalValue),
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
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
            security_requirements: {
                value: cdktn.listMapperHcl(ccSecurityRequirementPackSecurityRequirementPropertyToHclTerraform, false)(this._securityRequirements.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSecurityRequirementPack.SecurityRequirementPropertyList",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSecurityRequirementPackTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSecurityRequirementPack.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSecurityRequirementPackSecurityRequirementPropertyToTerraform(struct?: CcSecurityRequirementPack.SecurityRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        domain: cdktn.stringToTerraform(struct!.domain),
        evaluation: cdktn.stringToTerraform(struct!.evaluation),
        name: cdktn.stringToTerraform(struct!.name),
        remediation: cdktn.stringToTerraform(struct!.remediation),
    }
}


export function ccSecurityRequirementPackSecurityRequirementPropertyToHclTerraform(struct?: CcSecurityRequirementPack.SecurityRequirementProperty | cdktn.IResolvable): any {
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
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        evaluation: {
            value: cdktn.stringToHclTerraform(struct!.evaluation),
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
        remediation: {
            value: cdktn.stringToHclTerraform(struct!.remediation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityRequirementPackTagPropertyToTerraform(struct?: CcSecurityRequirementPack.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSecurityRequirementPackTagPropertyToHclTerraform(struct?: CcSecurityRequirementPack.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSecurityRequirementPack {
export interface SecurityRequirementProperty {
    /**
    * Description of the security requirement
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#description CcSecurityRequirementPack#description}
    */
    readonly description?: string;
    /**
    * Security domain this requirement belongs to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#domain CcSecurityRequirementPack#domain}
    */
    readonly domain?: string;
    /**
    * How to evaluate compliance with this requirement
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#evaluation CcSecurityRequirementPack#evaluation}
    */
    readonly evaluation?: string;
    /**
    * Name of the security requirement
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#name CcSecurityRequirementPack#name}
    */
    readonly name?: string;
    /**
    * How to remediate non-compliance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#remediation CcSecurityRequirementPack#remediation}
    */
    readonly remediation?: string;
}
export class SecurityRequirementPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SecurityRequirementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        if (this._evaluation !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluation = this._evaluation;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._remediation !== undefined) {
            hasAnyValues = true;
            internalValueResult.remediation = this._remediation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityRequirementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._domain = undefined;
            this._evaluation = undefined;
            this._name = undefined;
            this._remediation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._domain = value.domain;
            this._evaluation = value.evaluation;
            this._name = value.name;
            this._remediation = value.remediation;
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

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // evaluation - computed: true, optional: true, required: false
    private _evaluation?: string; 
    public get evaluation() {
        return this.getStringAttribute('evaluation');
    }
    public set evaluation(value: string) {
        this._evaluation = value;
    }
    public resetEvaluation() {
        this._evaluation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationInput() {
        return this._evaluation;
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

    // remediation - computed: true, optional: true, required: false
    private _remediation?: string; 
    public get remediation() {
        return this.getStringAttribute('remediation');
    }
    public set remediation(value: string) {
        this._remediation = value;
    }
    public resetRemediation() {
        this._remediation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remediationInput() {
        return this._remediation;
    }
}

export class SecurityRequirementPropertyList extends cdktn.ComplexList {
    public internalValue? : SecurityRequirementProperty[] | cdktn.IResolvable

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
    public get(index: number): SecurityRequirementPropertyOutputReference {
        return new SecurityRequirementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#key CcSecurityRequirementPack#key}
    */
    readonly key?: string;
    /**
    * The value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_security_requirement_pack#value CcSecurityRequirementPack#value}
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
