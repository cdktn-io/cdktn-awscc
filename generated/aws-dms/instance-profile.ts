// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The property describes an availability zone of the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#availability_zone CcInstanceProfile#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The optional description of the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#description CcInstanceProfile#description}
    */
    readonly description?: string;
    /**
    * The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be name/arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#instance_profile_identifier CcInstanceProfile#instance_profile_identifier}
    */
    readonly instanceProfileIdentifier?: string;
    /**
    * The property describes a name for the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#instance_profile_name CcInstanceProfile#instance_profile_name}
    */
    readonly instanceProfileName?: string;
    /**
    * The property describes kms key arn for the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#kms_key_arn CcInstanceProfile#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The property describes a network type for the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#network_type CcInstanceProfile#network_type}
    */
    readonly networkType?: string;
    /**
    * The property describes the publicly accessible of the instance profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#publicly_accessible CcInstanceProfile#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * The property describes a subnet group identifier for the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#subnet_group_identifier CcInstanceProfile#subnet_group_identifier}
    */
    readonly subnetGroupIdentifier?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#tags CcInstanceProfile#tags}
    */
    readonly tags?: CcInstanceProfile.TagProperty[] | cdktn.IResolvable;
    /**
    * The property describes vps security groups for the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#vpc_security_groups CcInstanceProfile#vpc_security_groups}
    */
    readonly vpcSecurityGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile awscc_dms_instance_profile}
*/
export class CcInstanceProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dms_instance_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstanceProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstanceProfile to import
    * @param importFromId The id of the existing CcInstanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstanceProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_instance_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile awscc_dms_instance_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceProfileProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcInstanceProfileProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_dms_instance_profile',
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
        this._availabilityZone = config.availabilityZone;
        this._description = config.description;
        this._instanceProfileIdentifier = config.instanceProfileIdentifier;
        this._instanceProfileName = config.instanceProfileName;
        this._kmsKeyArn = config.kmsKeyArn;
        this._networkType = config.networkType;
        this._publiclyAccessible = config.publiclyAccessible;
        this._subnetGroupIdentifier = config.subnetGroupIdentifier;
        this._tags.internalValue = config.tags;
        this._vpcSecurityGroups = config.vpcSecurityGroups;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
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

    // instance_profile_arn - computed: true, optional: false, required: false
    public get instanceProfileArn() {
        return this.getStringAttribute('instance_profile_arn');
    }

    // instance_profile_creation_time - computed: true, optional: false, required: false
    public get instanceProfileCreationTime() {
        return this.getStringAttribute('instance_profile_creation_time');
    }

    // instance_profile_identifier - computed: true, optional: true, required: false
    private _instanceProfileIdentifier?: string; 
    public get instanceProfileIdentifier() {
        return this.getStringAttribute('instance_profile_identifier');
    }
    public set instanceProfileIdentifier(value: string) {
        this._instanceProfileIdentifier = value;
    }
    public resetInstanceProfileIdentifier() {
        this._instanceProfileIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileIdentifierInput() {
        return this._instanceProfileIdentifier;
    }

    // instance_profile_name - computed: true, optional: true, required: false
    private _instanceProfileName?: string; 
    public get instanceProfileName() {
        return this.getStringAttribute('instance_profile_name');
    }
    public set instanceProfileName(value: string) {
        this._instanceProfileName = value;
    }
    public resetInstanceProfileName() {
        this._instanceProfileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileNameInput() {
        return this._instanceProfileName;
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

    // network_type - computed: true, optional: true, required: false
    private _networkType?: string; 
    public get networkType() {
        return this.getStringAttribute('network_type');
    }
    public set networkType(value: string) {
        this._networkType = value;
    }
    public resetNetworkType() {
        this._networkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkTypeInput() {
        return this._networkType;
    }

    // publicly_accessible - computed: true, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktn.IResolvable; 
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
        this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
        return this._publiclyAccessible;
    }

    // subnet_group_identifier - computed: true, optional: true, required: false
    private _subnetGroupIdentifier?: string; 
    public get subnetGroupIdentifier() {
        return this.getStringAttribute('subnet_group_identifier');
    }
    public set subnetGroupIdentifier(value: string) {
        this._subnetGroupIdentifier = value;
    }
    public resetSubnetGroupIdentifier() {
        this._subnetGroupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetGroupIdentifierInput() {
        return this._subnetGroupIdentifier;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInstanceProfile.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInstanceProfile.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_security_groups - computed: true, optional: true, required: false
    private _vpcSecurityGroups?: string[]; 
    public get vpcSecurityGroups() {
        return cdktn.Fn.tolist(this.getListAttribute('vpc_security_groups'));
    }
    public set vpcSecurityGroups(value: string[]) {
        this._vpcSecurityGroups = value;
    }
    public resetVpcSecurityGroups() {
        this._vpcSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupsInput() {
        return this._vpcSecurityGroups;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            description: cdktn.stringToTerraform(this._description),
            instance_profile_identifier: cdktn.stringToTerraform(this._instanceProfileIdentifier),
            instance_profile_name: cdktn.stringToTerraform(this._instanceProfileName),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            network_type: cdktn.stringToTerraform(this._networkType),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            subnet_group_identifier: cdktn.stringToTerraform(this._subnetGroupIdentifier),
            tags: cdktn.listMapper(ccInstanceProfileTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroups),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
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
            instance_profile_identifier: {
                value: cdktn.stringToHclTerraform(this._instanceProfileIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_profile_name: {
                value: cdktn.stringToHclTerraform(this._instanceProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            subnet_group_identifier: {
                value: cdktn.stringToHclTerraform(this._subnetGroupIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInstanceProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInstanceProfile.TagPropertyList",
            },
            vpc_security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroups),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceProfileTagPropertyToTerraform(struct?: CcInstanceProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInstanceProfileTagPropertyToHclTerraform(struct?: CcInstanceProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInstanceProfile {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#key CcInstanceProfile#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_instance_profile#value CcInstanceProfile#value}
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
