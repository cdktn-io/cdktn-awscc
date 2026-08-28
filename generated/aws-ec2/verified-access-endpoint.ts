// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVerifiedAccessEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The DNS name for users to reach your application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#application_domain CcVerifiedAccessEndpoint#application_domain}
    */
    readonly applicationDomain?: string;
    /**
    * The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#attachment_type CcVerifiedAccessEndpoint#attachment_type}
    */
    readonly attachmentType: string;
    /**
    * The options for cidr type endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#cidr_options CcVerifiedAccessEndpoint#cidr_options}
    */
    readonly cidrOptions?: CcVerifiedAccessEndpoint.CidrOptionsProperty;
    /**
    * A description for the AWS Verified Access endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#description CcVerifiedAccessEndpoint#description}
    */
    readonly description?: string;
    /**
    * The ARN of a public TLS/SSL certificate imported into or created with ACM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#domain_certificate_arn CcVerifiedAccessEndpoint#domain_certificate_arn}
    */
    readonly domainCertificateArn?: string;
    /**
    * A custom identifier that gets prepended to a DNS name that is generated for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#endpoint_domain_prefix CcVerifiedAccessEndpoint#endpoint_domain_prefix}
    */
    readonly endpointDomainPrefix?: string;
    /**
    * The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#endpoint_type CcVerifiedAccessEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#load_balancer_options CcVerifiedAccessEndpoint#load_balancer_options}
    */
    readonly loadBalancerOptions?: CcVerifiedAccessEndpoint.LoadBalancerOptionsProperty;
    /**
    * The options for network-interface type endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#network_interface_options CcVerifiedAccessEndpoint#network_interface_options}
    */
    readonly networkInterfaceOptions?: CcVerifiedAccessEndpoint.NetworkInterfaceOptionsProperty;
    /**
    * The AWS Verified Access policy document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#policy_document CcVerifiedAccessEndpoint#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * The status of the Verified Access policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#policy_enabled CcVerifiedAccessEndpoint#policy_enabled}
    */
    readonly policyEnabled?: boolean | cdktn.IResolvable;
    /**
    * The options for rds type endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#rds_options CcVerifiedAccessEndpoint#rds_options}
    */
    readonly rdsOptions?: CcVerifiedAccessEndpoint.RdsOptionsProperty;
    /**
    * The IDs of the security groups for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#security_group_ids CcVerifiedAccessEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The configuration options for customer provided KMS encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#sse_specification CcVerifiedAccessEndpoint#sse_specification}
    */
    readonly sseSpecification?: CcVerifiedAccessEndpoint.SseSpecificationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#tags CcVerifiedAccessEndpoint#tags}
    */
    readonly tags?: CcVerifiedAccessEndpoint.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the AWS Verified Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#verified_access_group_id CcVerifiedAccessEndpoint#verified_access_group_id}
    */
    readonly verifiedAccessGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}
*/
export class CcVerifiedAccessEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_verified_access_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVerifiedAccessEndpoint to import
    * @param importFromId The id of the existing CcVerifiedAccessEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVerifiedAccessEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVerifiedAccessEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcVerifiedAccessEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_verified_access_endpoint',
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
        this._applicationDomain = config.applicationDomain;
        this._attachmentType = config.attachmentType;
        this._cidrOptions.internalValue = config.cidrOptions;
        this._description = config.description;
        this._domainCertificateArn = config.domainCertificateArn;
        this._endpointDomainPrefix = config.endpointDomainPrefix;
        this._endpointType = config.endpointType;
        this._loadBalancerOptions.internalValue = config.loadBalancerOptions;
        this._networkInterfaceOptions.internalValue = config.networkInterfaceOptions;
        this._policyDocument = config.policyDocument;
        this._policyEnabled = config.policyEnabled;
        this._rdsOptions.internalValue = config.rdsOptions;
        this._securityGroupIds = config.securityGroupIds;
        this._sseSpecification.internalValue = config.sseSpecification;
        this._tags.internalValue = config.tags;
        this._verifiedAccessGroupId = config.verifiedAccessGroupId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_domain - computed: true, optional: true, required: false
    private _applicationDomain?: string; 
    public get applicationDomain() {
        return this.getStringAttribute('application_domain');
    }
    public set applicationDomain(value: string) {
        this._applicationDomain = value;
    }
    public resetApplicationDomain() {
        this._applicationDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationDomainInput() {
        return this._applicationDomain;
    }

    // attachment_type - computed: false, optional: false, required: true
    private _attachmentType?: string; 
    public get attachmentType() {
        return this.getStringAttribute('attachment_type');
    }
    public set attachmentType(value: string) {
        this._attachmentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentTypeInput() {
        return this._attachmentType;
    }

    // cidr_options - computed: true, optional: true, required: false
    private _cidrOptions = new CcVerifiedAccessEndpoint.CidrOptionsPropertyOutputReference(this, "cidr_options");
    public get cidrOptions() {
        return this._cidrOptions;
    }
    public putCidrOptions(value: CcVerifiedAccessEndpoint.CidrOptionsProperty) {
        this._cidrOptions.internalValue = value;
    }
    public resetCidrOptions() {
        this._cidrOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrOptionsInput() {
        return this._cidrOptions.internalValue;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // device_validation_domain - computed: true, optional: false, required: false
    public get deviceValidationDomain() {
        return this.getStringAttribute('device_validation_domain');
    }

    // domain_certificate_arn - computed: true, optional: true, required: false
    private _domainCertificateArn?: string; 
    public get domainCertificateArn() {
        return this.getStringAttribute('domain_certificate_arn');
    }
    public set domainCertificateArn(value: string) {
        this._domainCertificateArn = value;
    }
    public resetDomainCertificateArn() {
        this._domainCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainCertificateArnInput() {
        return this._domainCertificateArn;
    }

    // endpoint_domain - computed: true, optional: false, required: false
    public get endpointDomain() {
        return this.getStringAttribute('endpoint_domain');
    }

    // endpoint_domain_prefix - computed: true, optional: true, required: false
    private _endpointDomainPrefix?: string; 
    public get endpointDomainPrefix() {
        return this.getStringAttribute('endpoint_domain_prefix');
    }
    public set endpointDomainPrefix(value: string) {
        this._endpointDomainPrefix = value;
    }
    public resetEndpointDomainPrefix() {
        this._endpointDomainPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointDomainPrefixInput() {
        return this._endpointDomainPrefix;
    }

    // endpoint_type - computed: false, optional: false, required: true
    private _endpointType?: string; 
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
        this._endpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
        return this._endpointType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // load_balancer_options - computed: true, optional: true, required: false
    private _loadBalancerOptions = new CcVerifiedAccessEndpoint.LoadBalancerOptionsPropertyOutputReference(this, "load_balancer_options");
    public get loadBalancerOptions() {
        return this._loadBalancerOptions;
    }
    public putLoadBalancerOptions(value: CcVerifiedAccessEndpoint.LoadBalancerOptionsProperty) {
        this._loadBalancerOptions.internalValue = value;
    }
    public resetLoadBalancerOptions() {
        this._loadBalancerOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerOptionsInput() {
        return this._loadBalancerOptions.internalValue;
    }

    // network_interface_options - computed: true, optional: true, required: false
    private _networkInterfaceOptions = new CcVerifiedAccessEndpoint.NetworkInterfaceOptionsPropertyOutputReference(this, "network_interface_options");
    public get networkInterfaceOptions() {
        return this._networkInterfaceOptions;
    }
    public putNetworkInterfaceOptions(value: CcVerifiedAccessEndpoint.NetworkInterfaceOptionsProperty) {
        this._networkInterfaceOptions.internalValue = value;
    }
    public resetNetworkInterfaceOptions() {
        this._networkInterfaceOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceOptionsInput() {
        return this._networkInterfaceOptions.internalValue;
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_enabled - computed: true, optional: true, required: false
    private _policyEnabled?: boolean | cdktn.IResolvable; 
    public get policyEnabled() {
        return this.getBooleanAttribute('policy_enabled');
    }
    public set policyEnabled(value: boolean | cdktn.IResolvable) {
        this._policyEnabled = value;
    }
    public resetPolicyEnabled() {
        this._policyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyEnabledInput() {
        return this._policyEnabled;
    }

    // rds_options - computed: true, optional: true, required: false
    private _rdsOptions = new CcVerifiedAccessEndpoint.RdsOptionsPropertyOutputReference(this, "rds_options");
    public get rdsOptions() {
        return this._rdsOptions;
    }
    public putRdsOptions(value: CcVerifiedAccessEndpoint.RdsOptionsProperty) {
        this._rdsOptions.internalValue = value;
    }
    public resetRdsOptions() {
        this._rdsOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsOptionsInput() {
        return this._rdsOptions.internalValue;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // sse_specification - computed: true, optional: true, required: false
    private _sseSpecification = new CcVerifiedAccessEndpoint.SseSpecificationPropertyOutputReference(this, "sse_specification");
    public get sseSpecification() {
        return this._sseSpecification;
    }
    public putSseSpecification(value: CcVerifiedAccessEndpoint.SseSpecificationProperty) {
        this._sseSpecification.internalValue = value;
    }
    public resetSseSpecification() {
        this._sseSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseSpecificationInput() {
        return this._sseSpecification.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVerifiedAccessEndpoint.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVerifiedAccessEndpoint.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // verified_access_endpoint_id - computed: true, optional: false, required: false
    public get verifiedAccessEndpointId() {
        return this.getStringAttribute('verified_access_endpoint_id');
    }

    // verified_access_group_id - computed: false, optional: false, required: true
    private _verifiedAccessGroupId?: string; 
    public get verifiedAccessGroupId() {
        return this.getStringAttribute('verified_access_group_id');
    }
    public set verifiedAccessGroupId(value: string) {
        this._verifiedAccessGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get verifiedAccessGroupIdInput() {
        return this._verifiedAccessGroupId;
    }

    // verified_access_instance_id - computed: true, optional: false, required: false
    public get verifiedAccessInstanceId() {
        return this.getStringAttribute('verified_access_instance_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_domain: cdktn.stringToTerraform(this._applicationDomain),
            attachment_type: cdktn.stringToTerraform(this._attachmentType),
            cidr_options: ccVerifiedAccessEndpointCidrOptionsPropertyToTerraform(this._cidrOptions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            domain_certificate_arn: cdktn.stringToTerraform(this._domainCertificateArn),
            endpoint_domain_prefix: cdktn.stringToTerraform(this._endpointDomainPrefix),
            endpoint_type: cdktn.stringToTerraform(this._endpointType),
            load_balancer_options: ccVerifiedAccessEndpointLoadBalancerOptionsPropertyToTerraform(this._loadBalancerOptions.internalValue),
            network_interface_options: ccVerifiedAccessEndpointNetworkInterfaceOptionsPropertyToTerraform(this._networkInterfaceOptions.internalValue),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
            policy_enabled: cdktn.booleanToTerraform(this._policyEnabled),
            rds_options: ccVerifiedAccessEndpointRdsOptionsPropertyToTerraform(this._rdsOptions.internalValue),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            sse_specification: ccVerifiedAccessEndpointSseSpecificationPropertyToTerraform(this._sseSpecification.internalValue),
            tags: cdktn.listMapper(ccVerifiedAccessEndpointTagPropertyToTerraform, false)(this._tags.internalValue),
            verified_access_group_id: cdktn.stringToTerraform(this._verifiedAccessGroupId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_domain: {
                value: cdktn.stringToHclTerraform(this._applicationDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            attachment_type: {
                value: cdktn.stringToHclTerraform(this._attachmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cidr_options: {
                value: ccVerifiedAccessEndpointCidrOptionsPropertyToHclTerraform(this._cidrOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessEndpoint.CidrOptionsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_certificate_arn: {
                value: cdktn.stringToHclTerraform(this._domainCertificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_domain_prefix: {
                value: cdktn.stringToHclTerraform(this._endpointDomainPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_type: {
                value: cdktn.stringToHclTerraform(this._endpointType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancer_options: {
                value: ccVerifiedAccessEndpointLoadBalancerOptionsPropertyToHclTerraform(this._loadBalancerOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessEndpoint.LoadBalancerOptionsProperty",
            },
            network_interface_options: {
                value: ccVerifiedAccessEndpointNetworkInterfaceOptionsPropertyToHclTerraform(this._networkInterfaceOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessEndpoint.NetworkInterfaceOptionsProperty",
            },
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_enabled: {
                value: cdktn.booleanToHclTerraform(this._policyEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            rds_options: {
                value: ccVerifiedAccessEndpointRdsOptionsPropertyToHclTerraform(this._rdsOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessEndpoint.RdsOptionsProperty",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            sse_specification: {
                value: ccVerifiedAccessEndpointSseSpecificationPropertyToHclTerraform(this._sseSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessEndpoint.SseSpecificationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVerifiedAccessEndpointTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVerifiedAccessEndpoint.TagPropertyList",
            },
            verified_access_group_id: {
                value: cdktn.stringToHclTerraform(this._verifiedAccessGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVerifiedAccessEndpointPortRangePropertyToTerraform(struct?: CcVerifiedAccessEndpoint.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccVerifiedAccessEndpointPortRangePropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointCidrOptionsPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.CidrOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
        port_ranges: cdktn.listMapper(ccVerifiedAccessEndpointPortRangePropertyToTerraform, false)(struct!.portRanges),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccVerifiedAccessEndpointCidrOptionsPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.CidrOptionsProperty | cdktn.IResolvable): any {
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
        port_ranges: {
            value: cdktn.listMapperHcl(ccVerifiedAccessEndpointPortRangePropertyToHclTerraform, false)(struct!.portRanges),
            isBlock: true,
            type: "set",
            storageClassType: "PortRangePropertyList",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointLoadBalancerOptionsPortRangesPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.LoadBalancerOptionsPortRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccVerifiedAccessEndpointLoadBalancerOptionsPortRangesPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.LoadBalancerOptionsPortRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointLoadBalancerOptionsPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.LoadBalancerOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        load_balancer_arn: cdktn.stringToTerraform(struct!.loadBalancerArn),
        port: cdktn.numberToTerraform(struct!.port),
        port_ranges: cdktn.listMapper(ccVerifiedAccessEndpointLoadBalancerOptionsPortRangesPropertyToTerraform, false)(struct!.portRanges),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccVerifiedAccessEndpointLoadBalancerOptionsPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.LoadBalancerOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        load_balancer_arn: {
            value: cdktn.stringToHclTerraform(struct!.loadBalancerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port_ranges: {
            value: cdktn.listMapperHcl(ccVerifiedAccessEndpointLoadBalancerOptionsPortRangesPropertyToHclTerraform, false)(struct!.portRanges),
            isBlock: true,
            type: "set",
            storageClassType: "LoadBalancerOptionsPortRangesPropertyList",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointNetworkInterfaceOptionsPortRangesPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.NetworkInterfaceOptionsPortRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccVerifiedAccessEndpointNetworkInterfaceOptionsPortRangesPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.NetworkInterfaceOptionsPortRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointNetworkInterfaceOptionsPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.NetworkInterfaceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
        port: cdktn.numberToTerraform(struct!.port),
        port_ranges: cdktn.listMapper(ccVerifiedAccessEndpointNetworkInterfaceOptionsPortRangesPropertyToTerraform, false)(struct!.portRanges),
        protocol: cdktn.stringToTerraform(struct!.protocol),
    }
}


export function ccVerifiedAccessEndpointNetworkInterfaceOptionsPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.NetworkInterfaceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_interface_id: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port_ranges: {
            value: cdktn.listMapperHcl(ccVerifiedAccessEndpointNetworkInterfaceOptionsPortRangesPropertyToHclTerraform, false)(struct!.portRanges),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkInterfaceOptionsPortRangesPropertyList",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointRdsOptionsPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.RdsOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port: cdktn.numberToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        rds_db_cluster_arn: cdktn.stringToTerraform(struct!.rdsDbClusterArn),
        rds_db_instance_arn: cdktn.stringToTerraform(struct!.rdsDbInstanceArn),
        rds_db_proxy_arn: cdktn.stringToTerraform(struct!.rdsDbProxyArn),
        rds_endpoint: cdktn.stringToTerraform(struct!.rdsEndpoint),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccVerifiedAccessEndpointRdsOptionsPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.RdsOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rds_db_cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.rdsDbClusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rds_db_instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.rdsDbInstanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rds_db_proxy_arn: {
            value: cdktn.stringToHclTerraform(struct!.rdsDbProxyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rds_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.rdsEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointSseSpecificationPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.SseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_managed_key_enabled: cdktn.booleanToTerraform(struct!.customerManagedKeyEnabled),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccVerifiedAccessEndpointSseSpecificationPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.SseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_managed_key_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.customerManagedKeyEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessEndpointTagPropertyToTerraform(struct?: CcVerifiedAccessEndpoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVerifiedAccessEndpointTagPropertyToHclTerraform(struct?: CcVerifiedAccessEndpoint.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVerifiedAccessEndpoint {
export interface PortRangeProperty {
    /**
    * The first port in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#from_port CcVerifiedAccessEndpoint#from_port}
    */
    readonly fromPort?: number;
    /**
    * The last port in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#to_port CcVerifiedAccessEndpoint#to_port}
    */
    readonly toPort?: number;
}
export class PortRangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class PortRangePropertyList extends cdktn.ComplexList {
    public internalValue? : PortRangeProperty[] | cdktn.IResolvable

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
    public get(index: number): PortRangePropertyOutputReference {
        return new PortRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CidrOptionsProperty {
    /**
    * The IP address range, in CIDR notation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#cidr CcVerifiedAccessEndpoint#cidr}
    */
    readonly cidr?: string;
    /**
    * The list of port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#port_ranges CcVerifiedAccessEndpoint#port_ranges}
    */
    readonly portRanges?: PortRangeProperty[] | cdktn.IResolvable;
    /**
    * The IP protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#protocol CcVerifiedAccessEndpoint#protocol}
    */
    readonly protocol?: string;
    /**
    * The IDs of the subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#subnet_ids CcVerifiedAccessEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class CidrOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CidrOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        if (this._portRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRanges = this._portRanges?.internalValue;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CidrOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
            this._portRanges.internalValue = undefined;
            this._protocol = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
            this._portRanges.internalValue = value.portRanges;
            this._protocol = value.protocol;
            this._subnetIds = value.subnetIds;
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

    // port_ranges - computed: true, optional: true, required: false
    private _portRanges = new PortRangePropertyList(this, "port_ranges", true);
    public get portRanges() {
        return this._portRanges;
    }
    public putPortRanges(value: PortRangeProperty[] | cdktn.IResolvable) {
        this._portRanges.internalValue = value;
    }
    public resetPortRanges() {
        this._portRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangesInput() {
        return this._portRanges.internalValue;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface LoadBalancerOptionsPortRangesProperty {
    /**
    * The first port in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#from_port CcVerifiedAccessEndpoint#from_port}
    */
    readonly fromPort?: number;
    /**
    * The last port in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#to_port CcVerifiedAccessEndpoint#to_port}
    */
    readonly toPort?: number;
}
export class LoadBalancerOptionsPortRangesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LoadBalancerOptionsPortRangesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancerOptionsPortRangesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class LoadBalancerOptionsPortRangesPropertyList extends cdktn.ComplexList {
    public internalValue? : LoadBalancerOptionsPortRangesProperty[] | cdktn.IResolvable

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
    public get(index: number): LoadBalancerOptionsPortRangesPropertyOutputReference {
        return new LoadBalancerOptionsPortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LoadBalancerOptionsProperty {
    /**
    * The ARN of the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#load_balancer_arn CcVerifiedAccessEndpoint#load_balancer_arn}
    */
    readonly loadBalancerArn?: string;
    /**
    * The IP port number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#port CcVerifiedAccessEndpoint#port}
    */
    readonly port?: number;
    /**
    * The list of port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#port_ranges CcVerifiedAccessEndpoint#port_ranges}
    */
    readonly portRanges?: LoadBalancerOptionsPortRangesProperty[] | cdktn.IResolvable;
    /**
    * The IP protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#protocol CcVerifiedAccessEndpoint#protocol}
    */
    readonly protocol?: string;
    /**
    * The IDs of the subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#subnet_ids CcVerifiedAccessEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class LoadBalancerOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoadBalancerOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._loadBalancerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadBalancerArn = this._loadBalancerArn;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._portRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRanges = this._portRanges?.internalValue;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancerOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._loadBalancerArn = undefined;
            this._port = undefined;
            this._portRanges.internalValue = undefined;
            this._protocol = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._loadBalancerArn = value.loadBalancerArn;
            this._port = value.port;
            this._portRanges.internalValue = value.portRanges;
            this._protocol = value.protocol;
            this._subnetIds = value.subnetIds;
        }
    }

    // load_balancer_arn - computed: true, optional: true, required: false
    private _loadBalancerArn?: string; 
    public get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }
    public set loadBalancerArn(value: string) {
        this._loadBalancerArn = value;
    }
    public resetLoadBalancerArn() {
        this._loadBalancerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerArnInput() {
        return this._loadBalancerArn;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // port_ranges - computed: true, optional: true, required: false
    private _portRanges = new LoadBalancerOptionsPortRangesPropertyList(this, "port_ranges", true);
    public get portRanges() {
        return this._portRanges;
    }
    public putPortRanges(value: LoadBalancerOptionsPortRangesProperty[] | cdktn.IResolvable) {
        this._portRanges.internalValue = value;
    }
    public resetPortRanges() {
        this._portRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangesInput() {
        return this._portRanges.internalValue;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface NetworkInterfaceOptionsPortRangesProperty {
    /**
    * The first port in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#from_port CcVerifiedAccessEndpoint#from_port}
    */
    readonly fromPort?: number;
    /**
    * The last port in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#to_port CcVerifiedAccessEndpoint#to_port}
    */
    readonly toPort?: number;
}
export class NetworkInterfaceOptionsPortRangesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkInterfaceOptionsPortRangesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfaceOptionsPortRangesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class NetworkInterfaceOptionsPortRangesPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkInterfaceOptionsPortRangesProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkInterfaceOptionsPortRangesPropertyOutputReference {
        return new NetworkInterfaceOptionsPortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkInterfaceOptionsProperty {
    /**
    * The ID of the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#network_interface_id CcVerifiedAccessEndpoint#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * The IP port number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#port CcVerifiedAccessEndpoint#port}
    */
    readonly port?: number;
    /**
    * The list of port ranges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#port_ranges CcVerifiedAccessEndpoint#port_ranges}
    */
    readonly portRanges?: NetworkInterfaceOptionsPortRangesProperty[] | cdktn.IResolvable;
    /**
    * The IP protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#protocol CcVerifiedAccessEndpoint#protocol}
    */
    readonly protocol?: string;
}
export class NetworkInterfaceOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkInterfaceOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._portRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRanges = this._portRanges?.internalValue;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfaceOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkInterfaceId = undefined;
            this._port = undefined;
            this._portRanges.internalValue = undefined;
            this._protocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkInterfaceId = value.networkInterfaceId;
            this._port = value.port;
            this._portRanges.internalValue = value.portRanges;
            this._protocol = value.protocol;
        }
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // port_ranges - computed: true, optional: true, required: false
    private _portRanges = new NetworkInterfaceOptionsPortRangesPropertyList(this, "port_ranges", true);
    public get portRanges() {
        return this._portRanges;
    }
    public putPortRanges(value: NetworkInterfaceOptionsPortRangesProperty[] | cdktn.IResolvable) {
        this._portRanges.internalValue = value;
    }
    public resetPortRanges() {
        this._portRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangesInput() {
        return this._portRanges.internalValue;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }
}
export interface RdsOptionsProperty {
    /**
    * The IP port number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#port CcVerifiedAccessEndpoint#port}
    */
    readonly port?: number;
    /**
    * The IP protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#protocol CcVerifiedAccessEndpoint#protocol}
    */
    readonly protocol?: string;
    /**
    * The ARN of the RDS DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#rds_db_cluster_arn CcVerifiedAccessEndpoint#rds_db_cluster_arn}
    */
    readonly rdsDbClusterArn?: string;
    /**
    * The ARN of the RDS DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#rds_db_instance_arn CcVerifiedAccessEndpoint#rds_db_instance_arn}
    */
    readonly rdsDbInstanceArn?: string;
    /**
    * The ARN of the RDS DB proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#rds_db_proxy_arn CcVerifiedAccessEndpoint#rds_db_proxy_arn}
    */
    readonly rdsDbProxyArn?: string;
    /**
    * The RDS endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#rds_endpoint CcVerifiedAccessEndpoint#rds_endpoint}
    */
    readonly rdsEndpoint?: string;
    /**
    * The IDs of the subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#subnet_ids CcVerifiedAccessEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class RdsOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RdsOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._rdsDbClusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsDbClusterArn = this._rdsDbClusterArn;
        }
        if (this._rdsDbInstanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsDbInstanceArn = this._rdsDbInstanceArn;
        }
        if (this._rdsDbProxyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsDbProxyArn = this._rdsDbProxyArn;
        }
        if (this._rdsEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsEndpoint = this._rdsEndpoint;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RdsOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._rdsDbClusterArn = undefined;
            this._rdsDbInstanceArn = undefined;
            this._rdsDbProxyArn = undefined;
            this._rdsEndpoint = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._port = value.port;
            this._protocol = value.protocol;
            this._rdsDbClusterArn = value.rdsDbClusterArn;
            this._rdsDbInstanceArn = value.rdsDbInstanceArn;
            this._rdsDbProxyArn = value.rdsDbProxyArn;
            this._rdsEndpoint = value.rdsEndpoint;
            this._subnetIds = value.subnetIds;
        }
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // rds_db_cluster_arn - computed: true, optional: true, required: false
    private _rdsDbClusterArn?: string; 
    public get rdsDbClusterArn() {
        return this.getStringAttribute('rds_db_cluster_arn');
    }
    public set rdsDbClusterArn(value: string) {
        this._rdsDbClusterArn = value;
    }
    public resetRdsDbClusterArn() {
        this._rdsDbClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsDbClusterArnInput() {
        return this._rdsDbClusterArn;
    }

    // rds_db_instance_arn - computed: true, optional: true, required: false
    private _rdsDbInstanceArn?: string; 
    public get rdsDbInstanceArn() {
        return this.getStringAttribute('rds_db_instance_arn');
    }
    public set rdsDbInstanceArn(value: string) {
        this._rdsDbInstanceArn = value;
    }
    public resetRdsDbInstanceArn() {
        this._rdsDbInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsDbInstanceArnInput() {
        return this._rdsDbInstanceArn;
    }

    // rds_db_proxy_arn - computed: true, optional: true, required: false
    private _rdsDbProxyArn?: string; 
    public get rdsDbProxyArn() {
        return this.getStringAttribute('rds_db_proxy_arn');
    }
    public set rdsDbProxyArn(value: string) {
        this._rdsDbProxyArn = value;
    }
    public resetRdsDbProxyArn() {
        this._rdsDbProxyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsDbProxyArnInput() {
        return this._rdsDbProxyArn;
    }

    // rds_endpoint - computed: true, optional: true, required: false
    private _rdsEndpoint?: string; 
    public get rdsEndpoint() {
        return this.getStringAttribute('rds_endpoint');
    }
    public set rdsEndpoint(value: string) {
        this._rdsEndpoint = value;
    }
    public resetRdsEndpoint() {
        this._rdsEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsEndpointInput() {
        return this._rdsEndpoint;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface SseSpecificationProperty {
    /**
    * Whether to encrypt the policy with the provided key or disable encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#customer_managed_key_enabled CcVerifiedAccessEndpoint#customer_managed_key_enabled}
    */
    readonly customerManagedKeyEnabled?: boolean | cdktn.IResolvable;
    /**
    * KMS Key Arn used to encrypt the group policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#kms_key_arn CcVerifiedAccessEndpoint#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class SseSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SseSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerManagedKeyEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerManagedKeyEnabled = this._customerManagedKeyEnabled;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SseSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerManagedKeyEnabled = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerManagedKeyEnabled = value.customerManagedKeyEnabled;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // customer_managed_key_enabled - computed: true, optional: true, required: false
    private _customerManagedKeyEnabled?: boolean | cdktn.IResolvable; 
    public get customerManagedKeyEnabled() {
        return this.getBooleanAttribute('customer_managed_key_enabled');
    }
    public set customerManagedKeyEnabled(value: boolean | cdktn.IResolvable) {
        this._customerManagedKeyEnabled = value;
    }
    public resetCustomerManagedKeyEnabled() {
        this._customerManagedKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedKeyEnabledInput() {
        return this._customerManagedKeyEnabled;
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
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#key CcVerifiedAccessEndpoint#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_endpoint#value CcVerifiedAccessEndpoint#value}
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
