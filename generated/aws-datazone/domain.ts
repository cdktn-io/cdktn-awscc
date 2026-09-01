// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the Amazon DataZone domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#description CcDomain#description}
    */
    readonly description?: string;
    /**
    * The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the AWS account that houses the Amazon DataZone domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#domain_execution_role CcDomain#domain_execution_role}
    */
    readonly domainExecutionRole?: string;
    /**
    * The version of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#domain_version CcDomain#domain_version}
    */
    readonly domainVersion?: string;
    /**
    * The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#kms_key_identifier CcDomain#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * The name of the Amazon DataZone domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#name CcDomain#name}
    */
    readonly name: string;
    /**
    * The service role of the domain that is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#service_role CcDomain#service_role}
    */
    readonly serviceRole?: string;
    /**
    * The single-sign on configuration of the Amazon DataZone domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#single_sign_on CcDomain#single_sign_on}
    */
    readonly singleSignOn?: CcDomain.SingleSignOnProperty;
    /**
    * The tags specified for the Amazon DataZone domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#tags CcDomain#tags}
    */
    readonly tags?: CcDomain.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain awscc_datazone_domain}
*/
export class CcDomain extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_domain";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomain resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomain to import
    * @param importFromId The id of the existing CcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomain to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_domain", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain awscc_datazone_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_domain',
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
        this._domainExecutionRole = config.domainExecutionRole;
        this._domainVersion = config.domainVersion;
        this._kmsKeyIdentifier = config.kmsKeyIdentifier;
        this._name = config.name;
        this._serviceRole = config.serviceRole;
        this._singleSignOn.internalValue = config.singleSignOn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // domain_execution_role - computed: true, optional: true, required: false
    private _domainExecutionRole?: string; 
    public get domainExecutionRole() {
        return this.getStringAttribute('domain_execution_role');
    }
    public set domainExecutionRole(value: string) {
        this._domainExecutionRole = value;
    }
    public resetDomainExecutionRole() {
        this._domainExecutionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainExecutionRoleInput() {
        return this._domainExecutionRole;
    }

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_version - computed: true, optional: true, required: false
    private _domainVersion?: string; 
    public get domainVersion() {
        return this.getStringAttribute('domain_version');
    }
    public set domainVersion(value: string) {
        this._domainVersion = value;
    }
    public resetDomainVersion() {
        this._domainVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainVersionInput() {
        return this._domainVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_identifier - computed: true, optional: true, required: false
    private _kmsKeyIdentifier?: string; 
    public get kmsKeyIdentifier() {
        return this.getStringAttribute('kms_key_identifier');
    }
    public set kmsKeyIdentifier(value: string) {
        this._kmsKeyIdentifier = value;
    }
    public resetKmsKeyIdentifier() {
        this._kmsKeyIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdentifierInput() {
        return this._kmsKeyIdentifier;
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // managed_account_id - computed: true, optional: false, required: false
    public get managedAccountId() {
        return this.getStringAttribute('managed_account_id');
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

    // portal_url - computed: true, optional: false, required: false
    public get portalUrl() {
        return this.getStringAttribute('portal_url');
    }

    // root_domain_unit_id - computed: true, optional: false, required: false
    public get rootDomainUnitId() {
        return this.getStringAttribute('root_domain_unit_id');
    }

    // service_role - computed: true, optional: true, required: false
    private _serviceRole?: string; 
    public get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
        this._serviceRole = value;
    }
    public resetServiceRole() {
        this._serviceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
        return this._serviceRole;
    }

    // single_sign_on - computed: true, optional: true, required: false
    private _singleSignOn = new CcDomain.SingleSignOnPropertyOutputReference(this, "single_sign_on");
    public get singleSignOn() {
        return this._singleSignOn;
    }
    public putSingleSignOn(value: CcDomain.SingleSignOnProperty) {
        this._singleSignOn.internalValue = value;
    }
    public resetSingleSignOn() {
        this._singleSignOn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleSignOnInput() {
        return this._singleSignOn.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomain.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomain.TagProperty[] | cdktn.IResolvable) {
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
            domain_execution_role: cdktn.stringToTerraform(this._domainExecutionRole),
            domain_version: cdktn.stringToTerraform(this._domainVersion),
            kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
            name: cdktn.stringToTerraform(this._name),
            service_role: cdktn.stringToTerraform(this._serviceRole),
            single_sign_on: ccDomainSingleSignOnPropertyToTerraform(this._singleSignOn.internalValue),
            tags: cdktn.listMapper(ccDomainTagPropertyToTerraform, false)(this._tags.internalValue),
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
            domain_execution_role: {
                value: cdktn.stringToHclTerraform(this._domainExecutionRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_version: {
                value: cdktn.stringToHclTerraform(this._domainVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_identifier: {
                value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
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
            service_role: {
                value: cdktn.stringToHclTerraform(this._serviceRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            single_sign_on: {
                value: ccDomainSingleSignOnPropertyToHclTerraform(this._singleSignOn.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.SingleSignOnProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDomain.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainSingleSignOnPropertyToTerraform(struct?: CcDomain.SingleSignOnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idc_instance_arn: cdktn.stringToTerraform(struct!.idcInstanceArn),
        type: cdktn.stringToTerraform(struct!.type),
        user_assignment: cdktn.stringToTerraform(struct!.userAssignment),
    }
}


export function ccDomainSingleSignOnPropertyToHclTerraform(struct?: CcDomain.SingleSignOnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idc_instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.idcInstanceArn),
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
        user_assignment: {
            value: cdktn.stringToHclTerraform(struct!.userAssignment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainTagPropertyToTerraform(struct?: CcDomain.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainTagPropertyToHclTerraform(struct?: CcDomain.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDomain {
export interface SingleSignOnProperty {
    /**
    * The ARN of the AWS Identity Center instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#idc_instance_arn CcDomain#idc_instance_arn}
    */
    readonly idcInstanceArn?: string;
    /**
    * The type of single sign-on in Amazon DataZone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#type CcDomain#type}
    */
    readonly type?: string;
    /**
    * The single sign-on user assignment in Amazon DataZone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#user_assignment CcDomain#user_assignment}
    */
    readonly userAssignment?: string;
}
export class SingleSignOnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleSignOnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idcInstanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.idcInstanceArn = this._idcInstanceArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._userAssignment !== undefined) {
            hasAnyValues = true;
            internalValueResult.userAssignment = this._userAssignment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleSignOnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idcInstanceArn = undefined;
            this._type = undefined;
            this._userAssignment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idcInstanceArn = value.idcInstanceArn;
            this._type = value.type;
            this._userAssignment = value.userAssignment;
        }
    }

    // idc_instance_arn - computed: true, optional: true, required: false
    private _idcInstanceArn?: string; 
    public get idcInstanceArn() {
        return this.getStringAttribute('idc_instance_arn');
    }
    public set idcInstanceArn(value: string) {
        this._idcInstanceArn = value;
    }
    public resetIdcInstanceArn() {
        this._idcInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcInstanceArnInput() {
        return this._idcInstanceArn;
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

    // user_assignment - computed: true, optional: true, required: false
    private _userAssignment?: string; 
    public get userAssignment() {
        return this.getStringAttribute('user_assignment');
    }
    public set userAssignment(value: string) {
        this._userAssignment = value;
    }
    public resetUserAssignment() {
        this._userAssignment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAssignmentInput() {
        return this._userAssignment;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#key CcDomain#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_domain#value CcDomain#value}
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
