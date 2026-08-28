// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStudioProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#auth_mode CcStudio#auth_mode}
    */
    readonly authMode: string;
    /**
    * The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#default_s3_location CcStudio#default_s3_location}
    */
    readonly defaultS3Location: string;
    /**
    * A detailed description of the Studio.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#description CcStudio#description}
    */
    readonly description?: string;
    /**
    * The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#encryption_key_arn CcStudio#encryption_key_arn}
    */
    readonly encryptionKeyArn?: string;
    /**
    * The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#engine_security_group_id CcStudio#engine_security_group_id}
    */
    readonly engineSecurityGroupId: string;
    /**
    * The ARN of the IAM Identity Center instance to create the Studio application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#idc_instance_arn CcStudio#idc_instance_arn}
    */
    readonly idcInstanceArn?: string;
    /**
    * Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#idc_user_assignment CcStudio#idc_user_assignment}
    */
    readonly idcUserAssignment?: string;
    /**
    * Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#idp_auth_url CcStudio#idp_auth_url}
    */
    readonly idpAuthUrl?: string;
    /**
    * The name of relay state parameter for external Identity Provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#idp_relay_state_parameter_name CcStudio#idp_relay_state_parameter_name}
    */
    readonly idpRelayStateParameterName?: string;
    /**
    * A descriptive name for the Amazon EMR Studio.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#name CcStudio#name}
    */
    readonly name: string;
    /**
    * The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#service_role CcStudio#service_role}
    */
    readonly serviceRole: string;
    /**
    * A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#subnet_ids CcStudio#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#tags CcStudio#tags}
    */
    readonly tags?: CcStudio.TagProperty[] | cdktn.IResolvable;
    /**
    * A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#trusted_identity_propagation_enabled CcStudio#trusted_identity_propagation_enabled}
    */
    readonly trustedIdentityPropagationEnabled?: boolean | cdktn.IResolvable;
    /**
    * The IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#user_role CcStudio#user_role}
    */
    readonly userRole?: string;
    /**
    * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#vpc_id CcStudio#vpc_id}
    */
    readonly vpcId: string;
    /**
    * The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#workspace_security_group_id CcStudio#workspace_security_group_id}
    */
    readonly workspaceSecurityGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio awscc_emr_studio}
*/
export class CcStudio extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_emr_studio";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStudio resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStudio to import
    * @param importFromId The id of the existing CcStudio that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStudio to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_emr_studio", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio awscc_emr_studio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStudioProps
    */
    public constructor(scope: Construct, id: string, config: CcStudioProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_emr_studio',
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
        this._authMode = config.authMode;
        this._defaultS3Location = config.defaultS3Location;
        this._description = config.description;
        this._encryptionKeyArn = config.encryptionKeyArn;
        this._engineSecurityGroupId = config.engineSecurityGroupId;
        this._idcInstanceArn = config.idcInstanceArn;
        this._idcUserAssignment = config.idcUserAssignment;
        this._idpAuthUrl = config.idpAuthUrl;
        this._idpRelayStateParameterName = config.idpRelayStateParameterName;
        this._name = config.name;
        this._serviceRole = config.serviceRole;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
        this._trustedIdentityPropagationEnabled = config.trustedIdentityPropagationEnabled;
        this._userRole = config.userRole;
        this._vpcId = config.vpcId;
        this._workspaceSecurityGroupId = config.workspaceSecurityGroupId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auth_mode - computed: false, optional: false, required: true
    private _authMode?: string; 
    public get authMode() {
        return this.getStringAttribute('auth_mode');
    }
    public set authMode(value: string) {
        this._authMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authModeInput() {
        return this._authMode;
    }

    // default_s3_location - computed: false, optional: false, required: true
    private _defaultS3Location?: string; 
    public get defaultS3Location() {
        return this.getStringAttribute('default_s3_location');
    }
    public set defaultS3Location(value: string) {
        this._defaultS3Location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultS3LocationInput() {
        return this._defaultS3Location;
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

    // encryption_key_arn - computed: true, optional: true, required: false
    private _encryptionKeyArn?: string; 
    public get encryptionKeyArn() {
        return this.getStringAttribute('encryption_key_arn');
    }
    public set encryptionKeyArn(value: string) {
        this._encryptionKeyArn = value;
    }
    public resetEncryptionKeyArn() {
        this._encryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyArnInput() {
        return this._encryptionKeyArn;
    }

    // engine_security_group_id - computed: false, optional: false, required: true
    private _engineSecurityGroupId?: string; 
    public get engineSecurityGroupId() {
        return this.getStringAttribute('engine_security_group_id');
    }
    public set engineSecurityGroupId(value: string) {
        this._engineSecurityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineSecurityGroupIdInput() {
        return this._engineSecurityGroupId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // idc_user_assignment - computed: true, optional: true, required: false
    private _idcUserAssignment?: string; 
    public get idcUserAssignment() {
        return this.getStringAttribute('idc_user_assignment');
    }
    public set idcUserAssignment(value: string) {
        this._idcUserAssignment = value;
    }
    public resetIdcUserAssignment() {
        this._idcUserAssignment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcUserAssignmentInput() {
        return this._idcUserAssignment;
    }

    // idp_auth_url - computed: true, optional: true, required: false
    private _idpAuthUrl?: string; 
    public get idpAuthUrl() {
        return this.getStringAttribute('idp_auth_url');
    }
    public set idpAuthUrl(value: string) {
        this._idpAuthUrl = value;
    }
    public resetIdpAuthUrl() {
        this._idpAuthUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idpAuthUrlInput() {
        return this._idpAuthUrl;
    }

    // idp_relay_state_parameter_name - computed: true, optional: true, required: false
    private _idpRelayStateParameterName?: string; 
    public get idpRelayStateParameterName() {
        return this.getStringAttribute('idp_relay_state_parameter_name');
    }
    public set idpRelayStateParameterName(value: string) {
        this._idpRelayStateParameterName = value;
    }
    public resetIdpRelayStateParameterName() {
        this._idpRelayStateParameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idpRelayStateParameterNameInput() {
        return this._idpRelayStateParameterName;
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

    // service_role - computed: false, optional: false, required: true
    private _serviceRole?: string; 
    public get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
        this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
        return this._serviceRole;
    }

    // studio_id - computed: true, optional: false, required: false
    public get studioId() {
        return this.getStringAttribute('studio_id');
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStudio.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStudio.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trusted_identity_propagation_enabled - computed: true, optional: true, required: false
    private _trustedIdentityPropagationEnabled?: boolean | cdktn.IResolvable; 
    public get trustedIdentityPropagationEnabled() {
        return this.getBooleanAttribute('trusted_identity_propagation_enabled');
    }
    public set trustedIdentityPropagationEnabled(value: boolean | cdktn.IResolvable) {
        this._trustedIdentityPropagationEnabled = value;
    }
    public resetTrustedIdentityPropagationEnabled() {
        this._trustedIdentityPropagationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedIdentityPropagationEnabledInput() {
        return this._trustedIdentityPropagationEnabled;
    }

    // url - computed: true, optional: false, required: false
    public get url() {
        return this.getStringAttribute('url');
    }

    // user_role - computed: true, optional: true, required: false
    private _userRole?: string; 
    public get userRole() {
        return this.getStringAttribute('user_role');
    }
    public set userRole(value: string) {
        this._userRole = value;
    }
    public resetUserRole() {
        this._userRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userRoleInput() {
        return this._userRole;
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // workspace_security_group_id - computed: false, optional: false, required: true
    private _workspaceSecurityGroupId?: string; 
    public get workspaceSecurityGroupId() {
        return this.getStringAttribute('workspace_security_group_id');
    }
    public set workspaceSecurityGroupId(value: string) {
        this._workspaceSecurityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceSecurityGroupIdInput() {
        return this._workspaceSecurityGroupId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auth_mode: cdktn.stringToTerraform(this._authMode),
            default_s3_location: cdktn.stringToTerraform(this._defaultS3Location),
            description: cdktn.stringToTerraform(this._description),
            encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
            engine_security_group_id: cdktn.stringToTerraform(this._engineSecurityGroupId),
            idc_instance_arn: cdktn.stringToTerraform(this._idcInstanceArn),
            idc_user_assignment: cdktn.stringToTerraform(this._idcUserAssignment),
            idp_auth_url: cdktn.stringToTerraform(this._idpAuthUrl),
            idp_relay_state_parameter_name: cdktn.stringToTerraform(this._idpRelayStateParameterName),
            name: cdktn.stringToTerraform(this._name),
            service_role: cdktn.stringToTerraform(this._serviceRole),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccStudioTagPropertyToTerraform, false)(this._tags.internalValue),
            trusted_identity_propagation_enabled: cdktn.booleanToTerraform(this._trustedIdentityPropagationEnabled),
            user_role: cdktn.stringToTerraform(this._userRole),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
            workspace_security_group_id: cdktn.stringToTerraform(this._workspaceSecurityGroupId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auth_mode: {
                value: cdktn.stringToHclTerraform(this._authMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_s3_location: {
                value: cdktn.stringToHclTerraform(this._defaultS3Location),
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
            encryption_key_arn: {
                value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_security_group_id: {
                value: cdktn.stringToHclTerraform(this._engineSecurityGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idc_instance_arn: {
                value: cdktn.stringToHclTerraform(this._idcInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idc_user_assignment: {
                value: cdktn.stringToHclTerraform(this._idcUserAssignment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idp_auth_url: {
                value: cdktn.stringToHclTerraform(this._idpAuthUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idp_relay_state_parameter_name: {
                value: cdktn.stringToHclTerraform(this._idpRelayStateParameterName),
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
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStudioTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStudio.TagPropertyList",
            },
            trusted_identity_propagation_enabled: {
                value: cdktn.booleanToHclTerraform(this._trustedIdentityPropagationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            user_role: {
                value: cdktn.stringToHclTerraform(this._userRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workspace_security_group_id: {
                value: cdktn.stringToHclTerraform(this._workspaceSecurityGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStudioTagPropertyToTerraform(struct?: CcStudio.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStudioTagPropertyToHclTerraform(struct?: CcStudio.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStudio {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#key CcStudio#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio#value CcStudio#value}
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
