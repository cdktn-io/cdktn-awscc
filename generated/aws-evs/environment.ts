// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#connectivity_info CcEnvironment#connectivity_info}
    */
    readonly connectivityInfo?: CcEnvironment.ConnectivityInfoProperty;
    /**
    * The name of an EVS environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#environment_name CcEnvironment#environment_name}
    */
    readonly environmentName?: string;
    /**
    * The initial hosts for environment only required upon creation. Modification after creation will have no effect
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#hosts CcEnvironment#hosts}
    */
    readonly hosts?: CcEnvironment.HostInfoForCreateProperty[] | cdktn.IResolvable;
    /**
    * The initial Vlan configuration only required upon creation. Modification after creation will have no effect
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#initial_vlans CcEnvironment#initial_vlans}
    */
    readonly initialVlans?: CcEnvironment.InitialVlansProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#kms_key_id CcEnvironment#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The license information for an EVS environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#license_info CcEnvironment#license_info}
    */
    readonly licenseInfo?: CcEnvironment.LicenseInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#service_access_security_groups CcEnvironment#service_access_security_groups}
    */
    readonly serviceAccessSecurityGroups?: CcEnvironment.ServiceAccessSecurityGroupsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#service_access_subnet_id CcEnvironment#service_access_subnet_id}
    */
    readonly serviceAccessSubnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#site_id CcEnvironment#site_id}
    */
    readonly siteId?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#tags CcEnvironment#tags}
    */
    readonly tags?: CcEnvironment.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#terms_accepted CcEnvironment#terms_accepted}
    */
    readonly termsAccepted: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#vcf_hostnames CcEnvironment#vcf_hostnames}
    */
    readonly vcfHostnames?: CcEnvironment.VcfHostnamesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#vcf_version CcEnvironment#vcf_version}
    */
    readonly vcfVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#vpc_id CcEnvironment#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment awscc_evs_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_evs_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_evs_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment awscc_evs_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_evs_environment',
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
        this._connectivityInfo.internalValue = config.connectivityInfo;
        this._environmentName = config.environmentName;
        this._hosts.internalValue = config.hosts;
        this._initialVlans.internalValue = config.initialVlans;
        this._kmsKeyId = config.kmsKeyId;
        this._licenseInfo.internalValue = config.licenseInfo;
        this._serviceAccessSecurityGroups.internalValue = config.serviceAccessSecurityGroups;
        this._serviceAccessSubnetId = config.serviceAccessSubnetId;
        this._siteId = config.siteId;
        this._tags.internalValue = config.tags;
        this._termsAccepted = config.termsAccepted;
        this._vcfHostnames.internalValue = config.vcfHostnames;
        this._vcfVersion = config.vcfVersion;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // checks - computed: true, optional: false, required: false
    private _checks = new CcEnvironment.ChecksPropertyList(this, "checks", false);
    public get checks() {
        return this._checks;
    }

    // connectivity_info - computed: true, optional: true, required: false
    private _connectivityInfo = new CcEnvironment.ConnectivityInfoPropertyOutputReference(this, "connectivity_info");
    public get connectivityInfo() {
        return this._connectivityInfo;
    }
    public putConnectivityInfo(value: CcEnvironment.ConnectivityInfoProperty) {
        this._connectivityInfo.internalValue = value;
    }
    public resetConnectivityInfo() {
        this._connectivityInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectivityInfoInput() {
        return this._connectivityInfo.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // credentials - computed: true, optional: false, required: false
    private _credentials = new CcEnvironment.CredentialsPropertyList(this, "credentials", false);
    public get credentials() {
        return this._credentials;
    }

    // environment_arn - computed: true, optional: false, required: false
    public get environmentArn() {
        return this.getStringAttribute('environment_arn');
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // environment_name - computed: true, optional: true, required: false
    private _environmentName?: string; 
    public get environmentName() {
        return this.getStringAttribute('environment_name');
    }
    public set environmentName(value: string) {
        this._environmentName = value;
    }
    public resetEnvironmentName() {
        this._environmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentNameInput() {
        return this._environmentName;
    }

    // environment_state - computed: true, optional: false, required: false
    public get environmentState() {
        return this.getStringAttribute('environment_state');
    }

    // hosts - computed: true, optional: true, required: false
    private _hosts = new CcEnvironment.HostInfoForCreatePropertyList(this, "hosts", false);
    public get hosts() {
        return this._hosts;
    }
    public putHosts(value: CcEnvironment.HostInfoForCreateProperty[] | cdktn.IResolvable) {
        this._hosts.internalValue = value;
    }
    public resetHosts() {
        this._hosts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostsInput() {
        return this._hosts.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // initial_vlans - computed: true, optional: true, required: false
    private _initialVlans = new CcEnvironment.InitialVlansPropertyOutputReference(this, "initial_vlans");
    public get initialVlans() {
        return this._initialVlans;
    }
    public putInitialVlans(value: CcEnvironment.InitialVlansProperty) {
        this._initialVlans.internalValue = value;
    }
    public resetInitialVlans() {
        this._initialVlans.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialVlansInput() {
        return this._initialVlans.internalValue;
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

    // license_info - computed: true, optional: true, required: false
    private _licenseInfo = new CcEnvironment.LicenseInfoPropertyOutputReference(this, "license_info");
    public get licenseInfo() {
        return this._licenseInfo;
    }
    public putLicenseInfo(value: CcEnvironment.LicenseInfoProperty) {
        this._licenseInfo.internalValue = value;
    }
    public resetLicenseInfo() {
        this._licenseInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseInfoInput() {
        return this._licenseInfo.internalValue;
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }

    // service_access_security_groups - computed: true, optional: true, required: false
    private _serviceAccessSecurityGroups = new CcEnvironment.ServiceAccessSecurityGroupsPropertyOutputReference(this, "service_access_security_groups");
    public get serviceAccessSecurityGroups() {
        return this._serviceAccessSecurityGroups;
    }
    public putServiceAccessSecurityGroups(value: CcEnvironment.ServiceAccessSecurityGroupsProperty) {
        this._serviceAccessSecurityGroups.internalValue = value;
    }
    public resetServiceAccessSecurityGroups() {
        this._serviceAccessSecurityGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessSecurityGroupsInput() {
        return this._serviceAccessSecurityGroups.internalValue;
    }

    // service_access_subnet_id - computed: false, optional: false, required: true
    private _serviceAccessSubnetId?: string; 
    public get serviceAccessSubnetId() {
        return this.getStringAttribute('service_access_subnet_id');
    }
    public set serviceAccessSubnetId(value: string) {
        this._serviceAccessSubnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessSubnetIdInput() {
        return this._serviceAccessSubnetId;
    }

    // site_id - computed: true, optional: true, required: false
    private _siteId?: string; 
    public get siteId() {
        return this.getStringAttribute('site_id');
    }
    public set siteId(value: string) {
        this._siteId = value;
    }
    public resetSiteId() {
        this._siteId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get siteIdInput() {
        return this._siteId;
    }

    // state_details - computed: true, optional: false, required: false
    public get stateDetails() {
        return this.getStringAttribute('state_details');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEnvironment.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEnvironment.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // terms_accepted - computed: false, optional: false, required: true
    private _termsAccepted?: boolean | cdktn.IResolvable; 
    public get termsAccepted() {
        return this.getBooleanAttribute('terms_accepted');
    }
    public set termsAccepted(value: boolean | cdktn.IResolvable) {
        this._termsAccepted = value;
    }
    // Temporarily expose input value. Use with caution.
    public get termsAcceptedInput() {
        return this._termsAccepted;
    }

    // vcf_hostnames - computed: true, optional: true, required: false
    private _vcfHostnames = new CcEnvironment.VcfHostnamesPropertyOutputReference(this, "vcf_hostnames");
    public get vcfHostnames() {
        return this._vcfHostnames;
    }
    public putVcfHostnames(value: CcEnvironment.VcfHostnamesProperty) {
        this._vcfHostnames.internalValue = value;
    }
    public resetVcfHostnames() {
        this._vcfHostnames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vcfHostnamesInput() {
        return this._vcfHostnames.internalValue;
    }

    // vcf_version - computed: false, optional: false, required: true
    private _vcfVersion?: string; 
    public get vcfVersion() {
        return this.getStringAttribute('vcf_version');
    }
    public set vcfVersion(value: string) {
        this._vcfVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vcfVersionInput() {
        return this._vcfVersion;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connectivity_info: ccEnvironmentConnectivityInfoPropertyToTerraform(this._connectivityInfo.internalValue),
            environment_name: cdktn.stringToTerraform(this._environmentName),
            hosts: cdktn.listMapper(ccEnvironmentHostInfoForCreatePropertyToTerraform, false)(this._hosts.internalValue),
            initial_vlans: ccEnvironmentInitialVlansPropertyToTerraform(this._initialVlans.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            license_info: ccEnvironmentLicenseInfoPropertyToTerraform(this._licenseInfo.internalValue),
            service_access_security_groups: ccEnvironmentServiceAccessSecurityGroupsPropertyToTerraform(this._serviceAccessSecurityGroups.internalValue),
            service_access_subnet_id: cdktn.stringToTerraform(this._serviceAccessSubnetId),
            site_id: cdktn.stringToTerraform(this._siteId),
            tags: cdktn.listMapper(ccEnvironmentTagPropertyToTerraform, false)(this._tags.internalValue),
            terms_accepted: cdktn.booleanToTerraform(this._termsAccepted),
            vcf_hostnames: ccEnvironmentVcfHostnamesPropertyToTerraform(this._vcfHostnames.internalValue),
            vcf_version: cdktn.stringToTerraform(this._vcfVersion),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connectivity_info: {
                value: ccEnvironmentConnectivityInfoPropertyToHclTerraform(this._connectivityInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.ConnectivityInfoProperty",
            },
            environment_name: {
                value: cdktn.stringToHclTerraform(this._environmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hosts: {
                value: cdktn.listMapperHcl(ccEnvironmentHostInfoForCreatePropertyToHclTerraform, false)(this._hosts.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironment.HostInfoForCreatePropertyList",
            },
            initial_vlans: {
                value: ccEnvironmentInitialVlansPropertyToHclTerraform(this._initialVlans.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.InitialVlansProperty",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            license_info: {
                value: ccEnvironmentLicenseInfoPropertyToHclTerraform(this._licenseInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.LicenseInfoProperty",
            },
            service_access_security_groups: {
                value: ccEnvironmentServiceAccessSecurityGroupsPropertyToHclTerraform(this._serviceAccessSecurityGroups.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.ServiceAccessSecurityGroupsProperty",
            },
            service_access_subnet_id: {
                value: cdktn.stringToHclTerraform(this._serviceAccessSubnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            site_id: {
                value: cdktn.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEnvironmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEnvironment.TagPropertyList",
            },
            terms_accepted: {
                value: cdktn.booleanToHclTerraform(this._termsAccepted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            vcf_hostnames: {
                value: ccEnvironmentVcfHostnamesPropertyToHclTerraform(this._vcfHostnames.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.VcfHostnamesProperty",
            },
            vcf_version: {
                value: cdktn.stringToHclTerraform(this._vcfVersion),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentChecksPropertyToTerraform(struct?: CcEnvironment.ChecksProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccEnvironmentChecksPropertyToHclTerraform(struct?: CcEnvironment.ChecksProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccEnvironmentConnectivityInfoPropertyToTerraform(struct?: CcEnvironment.ConnectivityInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        private_route_server_peerings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.privateRouteServerPeerings),
    }
}


export function ccEnvironmentConnectivityInfoPropertyToHclTerraform(struct?: CcEnvironment.ConnectivityInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        private_route_server_peerings: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.privateRouteServerPeerings),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentCredentialsPropertyToTerraform(struct?: CcEnvironment.CredentialsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccEnvironmentCredentialsPropertyToHclTerraform(struct?: CcEnvironment.CredentialsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccEnvironmentHostInfoForCreatePropertyToTerraform(struct?: CcEnvironment.HostInfoForCreateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dedicated_host_id: cdktn.stringToTerraform(struct!.dedicatedHostId),
        host_name: cdktn.stringToTerraform(struct!.hostName),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        key_name: cdktn.stringToTerraform(struct!.keyName),
        placement_group_id: cdktn.stringToTerraform(struct!.placementGroupId),
    }
}


export function ccEnvironmentHostInfoForCreatePropertyToHclTerraform(struct?: CcEnvironment.HostInfoForCreateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dedicated_host_id: {
            value: cdktn.stringToHclTerraform(struct!.dedicatedHostId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_name: {
            value: cdktn.stringToHclTerraform(struct!.hostName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_name: {
            value: cdktn.stringToHclTerraform(struct!.keyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        placement_group_id: {
            value: cdktn.stringToHclTerraform(struct!.placementGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentInitialVlanInfoPropertyToTerraform(struct?: CcEnvironment.InitialVlanInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentInitialVlanInfoPropertyToHclTerraform(struct?: CcEnvironment.InitialVlanInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentExpansionVlan1PropertyToTerraform(struct?: CcEnvironment.ExpansionVlan1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentExpansionVlan1PropertyToHclTerraform(struct?: CcEnvironment.ExpansionVlan1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentExpansionVlan2PropertyToTerraform(struct?: CcEnvironment.ExpansionVlan2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentExpansionVlan2PropertyToHclTerraform(struct?: CcEnvironment.ExpansionVlan2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentHcxPropertyToTerraform(struct?: CcEnvironment.HcxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentHcxPropertyToHclTerraform(struct?: CcEnvironment.HcxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentNsxUpLinkPropertyToTerraform(struct?: CcEnvironment.NsxUpLinkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentNsxUpLinkPropertyToHclTerraform(struct?: CcEnvironment.NsxUpLinkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentVMotionPropertyToTerraform(struct?: CcEnvironment.VMotionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentVMotionPropertyToHclTerraform(struct?: CcEnvironment.VMotionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentVSanPropertyToTerraform(struct?: CcEnvironment.VSanProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentVSanPropertyToHclTerraform(struct?: CcEnvironment.VSanProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentVTepPropertyToTerraform(struct?: CcEnvironment.VTepProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentVTepPropertyToHclTerraform(struct?: CcEnvironment.VTepProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentVmManagementPropertyToTerraform(struct?: CcEnvironment.VmManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentVmManagementPropertyToHclTerraform(struct?: CcEnvironment.VmManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentVmkManagementPropertyToTerraform(struct?: CcEnvironment.VmkManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccEnvironmentVmkManagementPropertyToHclTerraform(struct?: CcEnvironment.VmkManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentInitialVlansPropertyToTerraform(struct?: CcEnvironment.InitialVlansProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        edge_v_tep: ccEnvironmentInitialVlanInfoPropertyToTerraform(struct!.edgeVTep),
        expansion_vlan_1: ccEnvironmentExpansionVlan1PropertyToTerraform(struct!.expansionVlan1),
        expansion_vlan_2: ccEnvironmentExpansionVlan2PropertyToTerraform(struct!.expansionVlan2),
        hcx: ccEnvironmentHcxPropertyToTerraform(struct!.hcx),
        hcx_network_acl_id: cdktn.stringToTerraform(struct!.hcxNetworkAclId),
        is_hcx_public: cdktn.booleanToTerraform(struct!.isHcxPublic),
        nsx_up_link: ccEnvironmentNsxUpLinkPropertyToTerraform(struct!.nsxUpLink),
        v_motion: ccEnvironmentVMotionPropertyToTerraform(struct!.vMotion),
        v_san: ccEnvironmentVSanPropertyToTerraform(struct!.vSan),
        v_tep: ccEnvironmentVTepPropertyToTerraform(struct!.vTep),
        vm_management: ccEnvironmentVmManagementPropertyToTerraform(struct!.vmManagement),
        vmk_management: ccEnvironmentVmkManagementPropertyToTerraform(struct!.vmkManagement),
    }
}


export function ccEnvironmentInitialVlansPropertyToHclTerraform(struct?: CcEnvironment.InitialVlansProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        edge_v_tep: {
            value: ccEnvironmentInitialVlanInfoPropertyToHclTerraform(struct!.edgeVTep),
            isBlock: true,
            type: "struct",
            storageClassType: "InitialVlanInfoProperty",
        },
        expansion_vlan_1: {
            value: ccEnvironmentExpansionVlan1PropertyToHclTerraform(struct!.expansionVlan1),
            isBlock: true,
            type: "struct",
            storageClassType: "ExpansionVlan1Property",
        },
        expansion_vlan_2: {
            value: ccEnvironmentExpansionVlan2PropertyToHclTerraform(struct!.expansionVlan2),
            isBlock: true,
            type: "struct",
            storageClassType: "ExpansionVlan2Property",
        },
        hcx: {
            value: ccEnvironmentHcxPropertyToHclTerraform(struct!.hcx),
            isBlock: true,
            type: "struct",
            storageClassType: "HcxProperty",
        },
        hcx_network_acl_id: {
            value: cdktn.stringToHclTerraform(struct!.hcxNetworkAclId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_hcx_public: {
            value: cdktn.booleanToHclTerraform(struct!.isHcxPublic),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        nsx_up_link: {
            value: ccEnvironmentNsxUpLinkPropertyToHclTerraform(struct!.nsxUpLink),
            isBlock: true,
            type: "struct",
            storageClassType: "NsxUpLinkProperty",
        },
        v_motion: {
            value: ccEnvironmentVMotionPropertyToHclTerraform(struct!.vMotion),
            isBlock: true,
            type: "struct",
            storageClassType: "VMotionProperty",
        },
        v_san: {
            value: ccEnvironmentVSanPropertyToHclTerraform(struct!.vSan),
            isBlock: true,
            type: "struct",
            storageClassType: "VSanProperty",
        },
        v_tep: {
            value: ccEnvironmentVTepPropertyToHclTerraform(struct!.vTep),
            isBlock: true,
            type: "struct",
            storageClassType: "VTepProperty",
        },
        vm_management: {
            value: ccEnvironmentVmManagementPropertyToHclTerraform(struct!.vmManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "VmManagementProperty",
        },
        vmk_management: {
            value: ccEnvironmentVmkManagementPropertyToHclTerraform(struct!.vmkManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "VmkManagementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentLicenseInfoPropertyToTerraform(struct?: CcEnvironment.LicenseInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        solution_key: cdktn.stringToTerraform(struct!.solutionKey),
        vsan_key: cdktn.stringToTerraform(struct!.vsanKey),
    }
}


export function ccEnvironmentLicenseInfoPropertyToHclTerraform(struct?: CcEnvironment.LicenseInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        solution_key: {
            value: cdktn.stringToHclTerraform(struct!.solutionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vsan_key: {
            value: cdktn.stringToHclTerraform(struct!.vsanKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentServiceAccessSecurityGroupsPropertyToTerraform(struct?: CcEnvironment.ServiceAccessSecurityGroupsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    }
}


export function ccEnvironmentServiceAccessSecurityGroupsPropertyToHclTerraform(struct?: CcEnvironment.ServiceAccessSecurityGroupsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentTagPropertyToTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentTagPropertyToHclTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
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


export function ccEnvironmentVcfHostnamesPropertyToTerraform(struct?: CcEnvironment.VcfHostnamesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloud_builder: cdktn.stringToTerraform(struct!.cloudBuilder),
        nsx: cdktn.stringToTerraform(struct!.nsx),
        nsx_edge_1: cdktn.stringToTerraform(struct!.nsxEdge1),
        nsx_edge_2: cdktn.stringToTerraform(struct!.nsxEdge2),
        nsx_manager_1: cdktn.stringToTerraform(struct!.nsxManager1),
        nsx_manager_2: cdktn.stringToTerraform(struct!.nsxManager2),
        nsx_manager_3: cdktn.stringToTerraform(struct!.nsxManager3),
        sddc_manager: cdktn.stringToTerraform(struct!.sddcManager),
        v_center: cdktn.stringToTerraform(struct!.vCenter),
    }
}


export function ccEnvironmentVcfHostnamesPropertyToHclTerraform(struct?: CcEnvironment.VcfHostnamesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloud_builder: {
            value: cdktn.stringToHclTerraform(struct!.cloudBuilder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nsx: {
            value: cdktn.stringToHclTerraform(struct!.nsx),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nsx_edge_1: {
            value: cdktn.stringToHclTerraform(struct!.nsxEdge1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nsx_edge_2: {
            value: cdktn.stringToHclTerraform(struct!.nsxEdge2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nsx_manager_1: {
            value: cdktn.stringToHclTerraform(struct!.nsxManager1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nsx_manager_2: {
            value: cdktn.stringToHclTerraform(struct!.nsxManager2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nsx_manager_3: {
            value: cdktn.stringToHclTerraform(struct!.nsxManager3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sddc_manager: {
            value: cdktn.stringToHclTerraform(struct!.sddcManager),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        v_center: {
            value: cdktn.stringToHclTerraform(struct!.vCenter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEnvironment {
export interface ChecksProperty {
}
export class ChecksPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ChecksProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChecksProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // impaired_since - computed: true, optional: false, required: false
    public get impairedSince() {
        return this.getStringAttribute('impaired_since');
    }

    // result - computed: true, optional: false, required: false
    public get result() {
        return this.getStringAttribute('result');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }
}

export class ChecksPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ChecksPropertyOutputReference {
        return new ChecksPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConnectivityInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#private_route_server_peerings CcEnvironment#private_route_server_peerings}
    */
    readonly privateRouteServerPeerings?: string[];
}
export class ConnectivityInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectivityInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._privateRouteServerPeerings !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateRouteServerPeerings = this._privateRouteServerPeerings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectivityInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._privateRouteServerPeerings = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._privateRouteServerPeerings = value.privateRouteServerPeerings;
        }
    }

    // private_route_server_peerings - computed: true, optional: true, required: false
    private _privateRouteServerPeerings?: string[]; 
    public get privateRouteServerPeerings() {
        return this.getListAttribute('private_route_server_peerings');
    }
    public set privateRouteServerPeerings(value: string[]) {
        this._privateRouteServerPeerings = value;
    }
    public resetPrivateRouteServerPeerings() {
        this._privateRouteServerPeerings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateRouteServerPeeringsInput() {
        return this._privateRouteServerPeerings;
    }
}
export interface CredentialsProperty {
}
export class CredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): CredentialsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}

export class CredentialsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): CredentialsPropertyOutputReference {
        return new CredentialsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HostInfoForCreateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#dedicated_host_id CcEnvironment#dedicated_host_id}
    */
    readonly dedicatedHostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#host_name CcEnvironment#host_name}
    */
    readonly hostName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#instance_type CcEnvironment#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#key_name CcEnvironment#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#placement_group_id CcEnvironment#placement_group_id}
    */
    readonly placementGroupId?: string;
}
export class HostInfoForCreatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HostInfoForCreateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dedicatedHostId !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedicatedHostId = this._dedicatedHostId;
        }
        if (this._hostName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostName = this._hostName;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._keyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyName = this._keyName;
        }
        if (this._placementGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementGroupId = this._placementGroupId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostInfoForCreateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dedicatedHostId = undefined;
            this._hostName = undefined;
            this._instanceType = undefined;
            this._keyName = undefined;
            this._placementGroupId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dedicatedHostId = value.dedicatedHostId;
            this._hostName = value.hostName;
            this._instanceType = value.instanceType;
            this._keyName = value.keyName;
            this._placementGroupId = value.placementGroupId;
        }
    }

    // dedicated_host_id - computed: true, optional: true, required: false
    private _dedicatedHostId?: string; 
    public get dedicatedHostId() {
        return this.getStringAttribute('dedicated_host_id');
    }
    public set dedicatedHostId(value: string) {
        this._dedicatedHostId = value;
    }
    public resetDedicatedHostId() {
        this._dedicatedHostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedHostIdInput() {
        return this._dedicatedHostId;
    }

    // host_name - computed: true, optional: true, required: false
    private _hostName?: string; 
    public get hostName() {
        return this.getStringAttribute('host_name');
    }
    public set hostName(value: string) {
        this._hostName = value;
    }
    public resetHostName() {
        this._hostName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostNameInput() {
        return this._hostName;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // key_name - computed: true, optional: true, required: false
    private _keyName?: string; 
    public get keyName() {
        return this.getStringAttribute('key_name');
    }
    public set keyName(value: string) {
        this._keyName = value;
    }
    public resetKeyName() {
        this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
        return this._keyName;
    }

    // placement_group_id - computed: true, optional: true, required: false
    private _placementGroupId?: string; 
    public get placementGroupId() {
        return this.getStringAttribute('placement_group_id');
    }
    public set placementGroupId(value: string) {
        this._placementGroupId = value;
    }
    public resetPlacementGroupId() {
        this._placementGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementGroupIdInput() {
        return this._placementGroupId;
    }
}

export class HostInfoForCreatePropertyList extends cdktn.ComplexList {
    public internalValue? : HostInfoForCreateProperty[] | cdktn.IResolvable

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
    public get(index: number): HostInfoForCreatePropertyOutputReference {
        return new HostInfoForCreatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InitialVlanInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class InitialVlanInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InitialVlanInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InitialVlanInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface ExpansionVlan1Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class ExpansionVlan1PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExpansionVlan1Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExpansionVlan1Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface ExpansionVlan2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class ExpansionVlan2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExpansionVlan2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExpansionVlan2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface HcxProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class HcxPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HcxProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HcxProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface NsxUpLinkProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class NsxUpLinkPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NsxUpLinkProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NsxUpLinkProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface VMotionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class VMotionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VMotionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VMotionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface VSanProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class VSanPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VSanProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VSanProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface VTepProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class VTepPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VTepProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VTepProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface VmManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class VmManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VmManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VmManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface VmkManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cidr CcEnvironment#cidr}
    */
    readonly cidr?: string;
}
export class VmkManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VmkManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VmkManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}
export interface InitialVlansProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#edge_v_tep CcEnvironment#edge_v_tep}
    */
    readonly edgeVTep?: InitialVlanInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#expansion_vlan_1 CcEnvironment#expansion_vlan_1}
    */
    readonly expansionVlan1?: ExpansionVlan1Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#expansion_vlan_2 CcEnvironment#expansion_vlan_2}
    */
    readonly expansionVlan2?: ExpansionVlan2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#hcx CcEnvironment#hcx}
    */
    readonly hcx?: HcxProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#hcx_network_acl_id CcEnvironment#hcx_network_acl_id}
    */
    readonly hcxNetworkAclId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#is_hcx_public CcEnvironment#is_hcx_public}
    */
    readonly isHcxPublic?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#nsx_up_link CcEnvironment#nsx_up_link}
    */
    readonly nsxUpLink?: NsxUpLinkProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#v_motion CcEnvironment#v_motion}
    */
    readonly vMotion?: VMotionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#v_san CcEnvironment#v_san}
    */
    readonly vSan?: VSanProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#v_tep CcEnvironment#v_tep}
    */
    readonly vTep?: VTepProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#vm_management CcEnvironment#vm_management}
    */
    readonly vmManagement?: VmManagementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#vmk_management CcEnvironment#vmk_management}
    */
    readonly vmkManagement?: VmkManagementProperty;
}
export class InitialVlansPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InitialVlansProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._edgeVTep?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.edgeVTep = this._edgeVTep?.internalValue;
        }
        if (this._expansionVlan1?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.expansionVlan1 = this._expansionVlan1?.internalValue;
        }
        if (this._expansionVlan2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.expansionVlan2 = this._expansionVlan2?.internalValue;
        }
        if (this._hcx?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hcx = this._hcx?.internalValue;
        }
        if (this._hcxNetworkAclId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hcxNetworkAclId = this._hcxNetworkAclId;
        }
        if (this._isHcxPublic !== undefined) {
            hasAnyValues = true;
            internalValueResult.isHcxPublic = this._isHcxPublic;
        }
        if (this._nsxUpLink?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsxUpLink = this._nsxUpLink?.internalValue;
        }
        if (this._vMotion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vMotion = this._vMotion?.internalValue;
        }
        if (this._vSan?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vSan = this._vSan?.internalValue;
        }
        if (this._vTep?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vTep = this._vTep?.internalValue;
        }
        if (this._vmManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vmManagement = this._vmManagement?.internalValue;
        }
        if (this._vmkManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vmkManagement = this._vmkManagement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InitialVlansProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._edgeVTep.internalValue = undefined;
            this._expansionVlan1.internalValue = undefined;
            this._expansionVlan2.internalValue = undefined;
            this._hcx.internalValue = undefined;
            this._hcxNetworkAclId = undefined;
            this._isHcxPublic = undefined;
            this._nsxUpLink.internalValue = undefined;
            this._vMotion.internalValue = undefined;
            this._vSan.internalValue = undefined;
            this._vTep.internalValue = undefined;
            this._vmManagement.internalValue = undefined;
            this._vmkManagement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._edgeVTep.internalValue = value.edgeVTep;
            this._expansionVlan1.internalValue = value.expansionVlan1;
            this._expansionVlan2.internalValue = value.expansionVlan2;
            this._hcx.internalValue = value.hcx;
            this._hcxNetworkAclId = value.hcxNetworkAclId;
            this._isHcxPublic = value.isHcxPublic;
            this._nsxUpLink.internalValue = value.nsxUpLink;
            this._vMotion.internalValue = value.vMotion;
            this._vSan.internalValue = value.vSan;
            this._vTep.internalValue = value.vTep;
            this._vmManagement.internalValue = value.vmManagement;
            this._vmkManagement.internalValue = value.vmkManagement;
        }
    }

    // edge_v_tep - computed: true, optional: true, required: false
    private _edgeVTep = new InitialVlanInfoPropertyOutputReference(this, "edge_v_tep");
    public get edgeVTep() {
        return this._edgeVTep;
    }
    public putEdgeVTep(value: InitialVlanInfoProperty) {
        this._edgeVTep.internalValue = value;
    }
    public resetEdgeVTep() {
        this._edgeVTep.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get edgeVTepInput() {
        return this._edgeVTep.internalValue;
    }

    // expansion_vlan_1 - computed: true, optional: true, required: false
    private _expansionVlan1 = new ExpansionVlan1PropertyOutputReference(this, "expansion_vlan_1");
    public get expansionVlan1() {
        return this._expansionVlan1;
    }
    public putExpansionVlan1(value: ExpansionVlan1Property) {
        this._expansionVlan1.internalValue = value;
    }
    public resetExpansionVlan1() {
        this._expansionVlan1.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expansionVlan1Input() {
        return this._expansionVlan1.internalValue;
    }

    // expansion_vlan_2 - computed: true, optional: true, required: false
    private _expansionVlan2 = new ExpansionVlan2PropertyOutputReference(this, "expansion_vlan_2");
    public get expansionVlan2() {
        return this._expansionVlan2;
    }
    public putExpansionVlan2(value: ExpansionVlan2Property) {
        this._expansionVlan2.internalValue = value;
    }
    public resetExpansionVlan2() {
        this._expansionVlan2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expansionVlan2Input() {
        return this._expansionVlan2.internalValue;
    }

    // hcx - computed: true, optional: true, required: false
    private _hcx = new HcxPropertyOutputReference(this, "hcx");
    public get hcx() {
        return this._hcx;
    }
    public putHcx(value: HcxProperty) {
        this._hcx.internalValue = value;
    }
    public resetHcx() {
        this._hcx.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hcxInput() {
        return this._hcx.internalValue;
    }

    // hcx_network_acl_id - computed: true, optional: true, required: false
    private _hcxNetworkAclId?: string; 
    public get hcxNetworkAclId() {
        return this.getStringAttribute('hcx_network_acl_id');
    }
    public set hcxNetworkAclId(value: string) {
        this._hcxNetworkAclId = value;
    }
    public resetHcxNetworkAclId() {
        this._hcxNetworkAclId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hcxNetworkAclIdInput() {
        return this._hcxNetworkAclId;
    }

    // is_hcx_public - computed: true, optional: true, required: false
    private _isHcxPublic?: boolean | cdktn.IResolvable; 
    public get isHcxPublic() {
        return this.getBooleanAttribute('is_hcx_public');
    }
    public set isHcxPublic(value: boolean | cdktn.IResolvable) {
        this._isHcxPublic = value;
    }
    public resetIsHcxPublic() {
        this._isHcxPublic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isHcxPublicInput() {
        return this._isHcxPublic;
    }

    // nsx_up_link - computed: true, optional: true, required: false
    private _nsxUpLink = new NsxUpLinkPropertyOutputReference(this, "nsx_up_link");
    public get nsxUpLink() {
        return this._nsxUpLink;
    }
    public putNsxUpLink(value: NsxUpLinkProperty) {
        this._nsxUpLink.internalValue = value;
    }
    public resetNsxUpLink() {
        this._nsxUpLink.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nsxUpLinkInput() {
        return this._nsxUpLink.internalValue;
    }

    // v_motion - computed: true, optional: true, required: false
    private _vMotion = new VMotionPropertyOutputReference(this, "v_motion");
    public get vMotion() {
        return this._vMotion;
    }
    public putVMotion(value: VMotionProperty) {
        this._vMotion.internalValue = value;
    }
    public resetVMotion() {
        this._vMotion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vMotionInput() {
        return this._vMotion.internalValue;
    }

    // v_san - computed: true, optional: true, required: false
    private _vSan = new VSanPropertyOutputReference(this, "v_san");
    public get vSan() {
        return this._vSan;
    }
    public putVSan(value: VSanProperty) {
        this._vSan.internalValue = value;
    }
    public resetVSan() {
        this._vSan.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vSanInput() {
        return this._vSan.internalValue;
    }

    // v_tep - computed: true, optional: true, required: false
    private _vTep = new VTepPropertyOutputReference(this, "v_tep");
    public get vTep() {
        return this._vTep;
    }
    public putVTep(value: VTepProperty) {
        this._vTep.internalValue = value;
    }
    public resetVTep() {
        this._vTep.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vTepInput() {
        return this._vTep.internalValue;
    }

    // vm_management - computed: true, optional: true, required: false
    private _vmManagement = new VmManagementPropertyOutputReference(this, "vm_management");
    public get vmManagement() {
        return this._vmManagement;
    }
    public putVmManagement(value: VmManagementProperty) {
        this._vmManagement.internalValue = value;
    }
    public resetVmManagement() {
        this._vmManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vmManagementInput() {
        return this._vmManagement.internalValue;
    }

    // vmk_management - computed: true, optional: true, required: false
    private _vmkManagement = new VmkManagementPropertyOutputReference(this, "vmk_management");
    public get vmkManagement() {
        return this._vmkManagement;
    }
    public putVmkManagement(value: VmkManagementProperty) {
        this._vmkManagement.internalValue = value;
    }
    public resetVmkManagement() {
        this._vmkManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vmkManagementInput() {
        return this._vmkManagement.internalValue;
    }
}
export interface LicenseInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#solution_key CcEnvironment#solution_key}
    */
    readonly solutionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#vsan_key CcEnvironment#vsan_key}
    */
    readonly vsanKey?: string;
}
export class LicenseInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LicenseInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._solutionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.solutionKey = this._solutionKey;
        }
        if (this._vsanKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.vsanKey = this._vsanKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._solutionKey = undefined;
            this._vsanKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._solutionKey = value.solutionKey;
            this._vsanKey = value.vsanKey;
        }
    }

    // solution_key - computed: true, optional: true, required: false
    private _solutionKey?: string; 
    public get solutionKey() {
        return this.getStringAttribute('solution_key');
    }
    public set solutionKey(value: string) {
        this._solutionKey = value;
    }
    public resetSolutionKey() {
        this._solutionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get solutionKeyInput() {
        return this._solutionKey;
    }

    // vsan_key - computed: true, optional: true, required: false
    private _vsanKey?: string; 
    public get vsanKey() {
        return this.getStringAttribute('vsan_key');
    }
    public set vsanKey(value: string) {
        this._vsanKey = value;
    }
    public resetVsanKey() {
        this._vsanKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vsanKeyInput() {
        return this._vsanKey;
    }
}
export interface ServiceAccessSecurityGroupsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#security_groups CcEnvironment#security_groups}
    */
    readonly securityGroups?: string[];
}
export class ServiceAccessSecurityGroupsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceAccessSecurityGroupsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceAccessSecurityGroupsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroups = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroups = value.securityGroups;
        }
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#key CcEnvironment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#value CcEnvironment#value}
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
export interface VcfHostnamesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#cloud_builder CcEnvironment#cloud_builder}
    */
    readonly cloudBuilder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#nsx CcEnvironment#nsx}
    */
    readonly nsx?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#nsx_edge_1 CcEnvironment#nsx_edge_1}
    */
    readonly nsxEdge1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#nsx_edge_2 CcEnvironment#nsx_edge_2}
    */
    readonly nsxEdge2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#nsx_manager_1 CcEnvironment#nsx_manager_1}
    */
    readonly nsxManager1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#nsx_manager_2 CcEnvironment#nsx_manager_2}
    */
    readonly nsxManager2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#nsx_manager_3 CcEnvironment#nsx_manager_3}
    */
    readonly nsxManager3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#sddc_manager CcEnvironment#sddc_manager}
    */
    readonly sddcManager?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evs_environment#v_center CcEnvironment#v_center}
    */
    readonly vCenter?: string;
}
export class VcfHostnamesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VcfHostnamesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudBuilder !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudBuilder = this._cloudBuilder;
        }
        if (this._nsx !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsx = this._nsx;
        }
        if (this._nsxEdge1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsxEdge1 = this._nsxEdge1;
        }
        if (this._nsxEdge2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsxEdge2 = this._nsxEdge2;
        }
        if (this._nsxManager1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsxManager1 = this._nsxManager1;
        }
        if (this._nsxManager2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsxManager2 = this._nsxManager2;
        }
        if (this._nsxManager3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsxManager3 = this._nsxManager3;
        }
        if (this._sddcManager !== undefined) {
            hasAnyValues = true;
            internalValueResult.sddcManager = this._sddcManager;
        }
        if (this._vCenter !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCenter = this._vCenter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VcfHostnamesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudBuilder = undefined;
            this._nsx = undefined;
            this._nsxEdge1 = undefined;
            this._nsxEdge2 = undefined;
            this._nsxManager1 = undefined;
            this._nsxManager2 = undefined;
            this._nsxManager3 = undefined;
            this._sddcManager = undefined;
            this._vCenter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudBuilder = value.cloudBuilder;
            this._nsx = value.nsx;
            this._nsxEdge1 = value.nsxEdge1;
            this._nsxEdge2 = value.nsxEdge2;
            this._nsxManager1 = value.nsxManager1;
            this._nsxManager2 = value.nsxManager2;
            this._nsxManager3 = value.nsxManager3;
            this._sddcManager = value.sddcManager;
            this._vCenter = value.vCenter;
        }
    }

    // cloud_builder - computed: true, optional: true, required: false
    private _cloudBuilder?: string; 
    public get cloudBuilder() {
        return this.getStringAttribute('cloud_builder');
    }
    public set cloudBuilder(value: string) {
        this._cloudBuilder = value;
    }
    public resetCloudBuilder() {
        this._cloudBuilder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudBuilderInput() {
        return this._cloudBuilder;
    }

    // nsx - computed: true, optional: true, required: false
    private _nsx?: string; 
    public get nsx() {
        return this.getStringAttribute('nsx');
    }
    public set nsx(value: string) {
        this._nsx = value;
    }
    public resetNsx() {
        this._nsx = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nsxInput() {
        return this._nsx;
    }

    // nsx_edge_1 - computed: true, optional: true, required: false
    private _nsxEdge1?: string; 
    public get nsxEdge1() {
        return this.getStringAttribute('nsx_edge_1');
    }
    public set nsxEdge1(value: string) {
        this._nsxEdge1 = value;
    }
    public resetNsxEdge1() {
        this._nsxEdge1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nsxEdge1Input() {
        return this._nsxEdge1;
    }

    // nsx_edge_2 - computed: true, optional: true, required: false
    private _nsxEdge2?: string; 
    public get nsxEdge2() {
        return this.getStringAttribute('nsx_edge_2');
    }
    public set nsxEdge2(value: string) {
        this._nsxEdge2 = value;
    }
    public resetNsxEdge2() {
        this._nsxEdge2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nsxEdge2Input() {
        return this._nsxEdge2;
    }

    // nsx_manager_1 - computed: true, optional: true, required: false
    private _nsxManager1?: string; 
    public get nsxManager1() {
        return this.getStringAttribute('nsx_manager_1');
    }
    public set nsxManager1(value: string) {
        this._nsxManager1 = value;
    }
    public resetNsxManager1() {
        this._nsxManager1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nsxManager1Input() {
        return this._nsxManager1;
    }

    // nsx_manager_2 - computed: true, optional: true, required: false
    private _nsxManager2?: string; 
    public get nsxManager2() {
        return this.getStringAttribute('nsx_manager_2');
    }
    public set nsxManager2(value: string) {
        this._nsxManager2 = value;
    }
    public resetNsxManager2() {
        this._nsxManager2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nsxManager2Input() {
        return this._nsxManager2;
    }

    // nsx_manager_3 - computed: true, optional: true, required: false
    private _nsxManager3?: string; 
    public get nsxManager3() {
        return this.getStringAttribute('nsx_manager_3');
    }
    public set nsxManager3(value: string) {
        this._nsxManager3 = value;
    }
    public resetNsxManager3() {
        this._nsxManager3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nsxManager3Input() {
        return this._nsxManager3;
    }

    // sddc_manager - computed: true, optional: true, required: false
    private _sddcManager?: string; 
    public get sddcManager() {
        return this.getStringAttribute('sddc_manager');
    }
    public set sddcManager(value: string) {
        this._sddcManager = value;
    }
    public resetSddcManager() {
        this._sddcManager = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sddcManagerInput() {
        return this._sddcManager;
    }

    // v_center - computed: true, optional: true, required: false
    private _vCenter?: string; 
    public get vCenter() {
        return this.getStringAttribute('v_center');
    }
    public set vCenter(value: string) {
        this._vCenter = value;
    }
    public resetVCenter() {
        this._vCenter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCenterInput() {
        return this._vCenter;
    }
}
}
