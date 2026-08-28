// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTLSInspectionConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#description CcTLSInspectionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#tags CcTLSInspectionConfiguration#tags}
    */
    readonly tags?: CcTLSInspectionConfiguration.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#tls_inspection_configuration CcTLSInspectionConfiguration#tls_inspection_configuration}
    */
    readonly tlsInspectionConfiguration: CcTLSInspectionConfiguration.TLSInspectionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#tls_inspection_configuration_name CcTLSInspectionConfiguration#tls_inspection_configuration_name}
    */
    readonly tlsInspectionConfigurationName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration awscc_networkfirewall_tls_inspection_configuration}
*/
export class CcTLSInspectionConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkfirewall_tls_inspection_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTLSInspectionConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTLSInspectionConfiguration to import
    * @param importFromId The id of the existing CcTLSInspectionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTLSInspectionConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_tls_inspection_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration awscc_networkfirewall_tls_inspection_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTLSInspectionConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcTLSInspectionConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkfirewall_tls_inspection_configuration',
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
        this._tags.internalValue = config.tags;
        this._tlsInspectionConfiguration.internalValue = config.tlsInspectionConfiguration;
        this._tlsInspectionConfigurationName = config.tlsInspectionConfigurationName;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTLSInspectionConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTLSInspectionConfiguration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tls_inspection_configuration - computed: false, optional: false, required: true
    private _tlsInspectionConfiguration = new CcTLSInspectionConfiguration.TLSInspectionConfigurationPropertyOutputReference(this, "tls_inspection_configuration");
    public get tlsInspectionConfiguration() {
        return this._tlsInspectionConfiguration;
    }
    public putTlsInspectionConfiguration(value: CcTLSInspectionConfiguration.TLSInspectionConfigurationProperty) {
        this._tlsInspectionConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInspectionConfigurationInput() {
        return this._tlsInspectionConfiguration.internalValue;
    }

    // tls_inspection_configuration_arn - computed: true, optional: false, required: false
    public get tlsInspectionConfigurationArn() {
        return this.getStringAttribute('tls_inspection_configuration_arn');
    }

    // tls_inspection_configuration_id - computed: true, optional: false, required: false
    public get tlsInspectionConfigurationId() {
        return this.getStringAttribute('tls_inspection_configuration_id');
    }

    // tls_inspection_configuration_name - computed: false, optional: false, required: true
    private _tlsInspectionConfigurationName?: string; 
    public get tlsInspectionConfigurationName() {
        return this.getStringAttribute('tls_inspection_configuration_name');
    }
    public set tlsInspectionConfigurationName(value: string) {
        this._tlsInspectionConfigurationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInspectionConfigurationNameInput() {
        return this._tlsInspectionConfigurationName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            tags: cdktn.listMapper(ccTLSInspectionConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
            tls_inspection_configuration: ccTLSInspectionConfigurationTLSInspectionConfigurationPropertyToTerraform(this._tlsInspectionConfiguration.internalValue),
            tls_inspection_configuration_name: cdktn.stringToTerraform(this._tlsInspectionConfigurationName),
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
            tags: {
                value: cdktn.listMapperHcl(ccTLSInspectionConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTLSInspectionConfiguration.TagPropertyList",
            },
            tls_inspection_configuration: {
                value: ccTLSInspectionConfigurationTLSInspectionConfigurationPropertyToHclTerraform(this._tlsInspectionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTLSInspectionConfiguration.TLSInspectionConfigurationProperty",
            },
            tls_inspection_configuration_name: {
                value: cdktn.stringToHclTerraform(this._tlsInspectionConfigurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTLSInspectionConfigurationTagPropertyToTerraform(struct?: CcTLSInspectionConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTLSInspectionConfigurationTagPropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.TagProperty | cdktn.IResolvable): any {
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


export function ccTLSInspectionConfigurationCheckCertificateRevocationStatusPropertyToTerraform(struct?: CcTLSInspectionConfiguration.CheckCertificateRevocationStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        revoked_status_action: cdktn.stringToTerraform(struct!.revokedStatusAction),
        unknown_status_action: cdktn.stringToTerraform(struct!.unknownStatusAction),
    }
}


export function ccTLSInspectionConfigurationCheckCertificateRevocationStatusPropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.CheckCertificateRevocationStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        revoked_status_action: {
            value: cdktn.stringToHclTerraform(struct!.revokedStatusAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unknown_status_action: {
            value: cdktn.stringToHclTerraform(struct!.unknownStatusAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTLSInspectionConfigurationPortRangePropertyToTerraform(struct?: CcTLSInspectionConfiguration.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccTLSInspectionConfigurationPortRangePropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.PortRangeProperty | cdktn.IResolvable): any {
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


export function ccTLSInspectionConfigurationAddressPropertyToTerraform(struct?: CcTLSInspectionConfiguration.AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
    }
}


export function ccTLSInspectionConfigurationAddressPropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_definition: {
            value: cdktn.stringToHclTerraform(struct!.addressDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTLSInspectionConfigurationSourcePortsPropertyToTerraform(struct?: CcTLSInspectionConfiguration.SourcePortsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccTLSInspectionConfigurationSourcePortsPropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.SourcePortsProperty | cdktn.IResolvable): any {
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


export function ccTLSInspectionConfigurationSourcesPropertyToTerraform(struct?: CcTLSInspectionConfiguration.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
    }
}


export function ccTLSInspectionConfigurationSourcesPropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_definition: {
            value: cdktn.stringToHclTerraform(struct!.addressDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTLSInspectionConfigurationServerCertificateScopePropertyToTerraform(struct?: CcTLSInspectionConfiguration.ServerCertificateScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_ports: cdktn.listMapper(ccTLSInspectionConfigurationPortRangePropertyToTerraform, false)(struct!.destinationPorts),
        destinations: cdktn.listMapper(ccTLSInspectionConfigurationAddressPropertyToTerraform, false)(struct!.destinations),
        protocols: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.protocols),
        source_ports: cdktn.listMapper(ccTLSInspectionConfigurationSourcePortsPropertyToTerraform, false)(struct!.sourcePorts),
        sources: cdktn.listMapper(ccTLSInspectionConfigurationSourcesPropertyToTerraform, false)(struct!.sources),
    }
}


export function ccTLSInspectionConfigurationServerCertificateScopePropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.ServerCertificateScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_ports: {
            value: cdktn.listMapperHcl(ccTLSInspectionConfigurationPortRangePropertyToHclTerraform, false)(struct!.destinationPorts),
            isBlock: true,
            type: "list",
            storageClassType: "PortRangePropertyList",
        },
        destinations: {
            value: cdktn.listMapperHcl(ccTLSInspectionConfigurationAddressPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "AddressPropertyList",
        },
        protocols: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.protocols),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        source_ports: {
            value: cdktn.listMapperHcl(ccTLSInspectionConfigurationSourcePortsPropertyToHclTerraform, false)(struct!.sourcePorts),
            isBlock: true,
            type: "list",
            storageClassType: "SourcePortsPropertyList",
        },
        sources: {
            value: cdktn.listMapperHcl(ccTLSInspectionConfigurationSourcesPropertyToHclTerraform, false)(struct!.sources),
            isBlock: true,
            type: "list",
            storageClassType: "SourcesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTLSInspectionConfigurationServerCertificatePropertyToTerraform(struct?: CcTLSInspectionConfiguration.ServerCertificateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    }
}


export function ccTLSInspectionConfigurationServerCertificatePropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.ServerCertificateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTLSInspectionConfigurationServerCertificateConfigurationPropertyToTerraform(struct?: CcTLSInspectionConfiguration.ServerCertificateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_authority_arn: cdktn.stringToTerraform(struct!.certificateAuthorityArn),
        check_certificate_revocation_status: ccTLSInspectionConfigurationCheckCertificateRevocationStatusPropertyToTerraform(struct!.checkCertificateRevocationStatus),
        scopes: cdktn.listMapper(ccTLSInspectionConfigurationServerCertificateScopePropertyToTerraform, false)(struct!.scopes),
        server_certificates: cdktn.listMapper(ccTLSInspectionConfigurationServerCertificatePropertyToTerraform, false)(struct!.serverCertificates),
    }
}


export function ccTLSInspectionConfigurationServerCertificateConfigurationPropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.ServerCertificateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_authority_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateAuthorityArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        check_certificate_revocation_status: {
            value: ccTLSInspectionConfigurationCheckCertificateRevocationStatusPropertyToHclTerraform(struct!.checkCertificateRevocationStatus),
            isBlock: true,
            type: "struct",
            storageClassType: "CheckCertificateRevocationStatusProperty",
        },
        scopes: {
            value: cdktn.listMapperHcl(ccTLSInspectionConfigurationServerCertificateScopePropertyToHclTerraform, false)(struct!.scopes),
            isBlock: true,
            type: "list",
            storageClassType: "ServerCertificateScopePropertyList",
        },
        server_certificates: {
            value: cdktn.listMapperHcl(ccTLSInspectionConfigurationServerCertificatePropertyToHclTerraform, false)(struct!.serverCertificates),
            isBlock: true,
            type: "set",
            storageClassType: "ServerCertificatePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTLSInspectionConfigurationTLSInspectionConfigurationPropertyToTerraform(struct?: CcTLSInspectionConfiguration.TLSInspectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        server_certificate_configurations: cdktn.listMapper(ccTLSInspectionConfigurationServerCertificateConfigurationPropertyToTerraform, false)(struct!.serverCertificateConfigurations),
    }
}


export function ccTLSInspectionConfigurationTLSInspectionConfigurationPropertyToHclTerraform(struct?: CcTLSInspectionConfiguration.TLSInspectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        server_certificate_configurations: {
            value: cdktn.listMapperHcl(ccTLSInspectionConfigurationServerCertificateConfigurationPropertyToHclTerraform, false)(struct!.serverCertificateConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ServerCertificateConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTLSInspectionConfiguration {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#key CcTLSInspectionConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#value CcTLSInspectionConfiguration#value}
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
export interface CheckCertificateRevocationStatusProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#revoked_status_action CcTLSInspectionConfiguration#revoked_status_action}
    */
    readonly revokedStatusAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#unknown_status_action CcTLSInspectionConfiguration#unknown_status_action}
    */
    readonly unknownStatusAction?: string;
}
export class CheckCertificateRevocationStatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CheckCertificateRevocationStatusProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._revokedStatusAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.revokedStatusAction = this._revokedStatusAction;
        }
        if (this._unknownStatusAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.unknownStatusAction = this._unknownStatusAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CheckCertificateRevocationStatusProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._revokedStatusAction = undefined;
            this._unknownStatusAction = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._revokedStatusAction = value.revokedStatusAction;
            this._unknownStatusAction = value.unknownStatusAction;
        }
    }

    // revoked_status_action - computed: true, optional: true, required: false
    private _revokedStatusAction?: string; 
    public get revokedStatusAction() {
        return this.getStringAttribute('revoked_status_action');
    }
    public set revokedStatusAction(value: string) {
        this._revokedStatusAction = value;
    }
    public resetRevokedStatusAction() {
        this._revokedStatusAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revokedStatusActionInput() {
        return this._revokedStatusAction;
    }

    // unknown_status_action - computed: true, optional: true, required: false
    private _unknownStatusAction?: string; 
    public get unknownStatusAction() {
        return this.getStringAttribute('unknown_status_action');
    }
    public set unknownStatusAction(value: string) {
        this._unknownStatusAction = value;
    }
    public resetUnknownStatusAction() {
        this._unknownStatusAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unknownStatusActionInput() {
        return this._unknownStatusAction;
    }
}
export interface PortRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#from_port CcTLSInspectionConfiguration#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#to_port CcTLSInspectionConfiguration#to_port}
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
export interface AddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#address_definition CcTLSInspectionConfiguration#address_definition}
    */
    readonly addressDefinition?: string;
}
export class AddressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressDefinition = this._addressDefinition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressDefinition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressDefinition = value.addressDefinition;
        }
    }

    // address_definition - computed: true, optional: true, required: false
    private _addressDefinition?: string; 
    public get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
    public set addressDefinition(value: string) {
        this._addressDefinition = value;
    }
    public resetAddressDefinition() {
        this._addressDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressDefinitionInput() {
        return this._addressDefinition;
    }
}

export class AddressPropertyList extends cdktn.ComplexList {
    public internalValue? : AddressProperty[] | cdktn.IResolvable

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
    public get(index: number): AddressPropertyOutputReference {
        return new AddressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourcePortsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#from_port CcTLSInspectionConfiguration#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#to_port CcTLSInspectionConfiguration#to_port}
    */
    readonly toPort?: number;
}
export class SourcePortsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourcePortsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SourcePortsProperty | cdktn.IResolvable | undefined) {
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

export class SourcePortsPropertyList extends cdktn.ComplexList {
    public internalValue? : SourcePortsProperty[] | cdktn.IResolvable

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
    public get(index: number): SourcePortsPropertyOutputReference {
        return new SourcePortsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourcesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#address_definition CcTLSInspectionConfiguration#address_definition}
    */
    readonly addressDefinition?: string;
}
export class SourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressDefinition = this._addressDefinition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressDefinition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressDefinition = value.addressDefinition;
        }
    }

    // address_definition - computed: true, optional: true, required: false
    private _addressDefinition?: string; 
    public get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
    public set addressDefinition(value: string) {
        this._addressDefinition = value;
    }
    public resetAddressDefinition() {
        this._addressDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressDefinitionInput() {
        return this._addressDefinition;
    }
}

export class SourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : SourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): SourcesPropertyOutputReference {
        return new SourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServerCertificateScopeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#destination_ports CcTLSInspectionConfiguration#destination_ports}
    */
    readonly destinationPorts?: PortRangeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#destinations CcTLSInspectionConfiguration#destinations}
    */
    readonly destinations?: AddressProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#protocols CcTLSInspectionConfiguration#protocols}
    */
    readonly protocols?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#source_ports CcTLSInspectionConfiguration#source_ports}
    */
    readonly sourcePorts?: SourcePortsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#sources CcTLSInspectionConfiguration#sources}
    */
    readonly sources?: SourcesProperty[] | cdktn.IResolvable;
}
export class ServerCertificateScopePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServerCertificateScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationPorts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPorts = this._destinationPorts?.internalValue;
        }
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._sourcePorts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePorts = this._sourcePorts?.internalValue;
        }
        if (this._sources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sources = this._sources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerCertificateScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationPorts.internalValue = undefined;
            this._destinations.internalValue = undefined;
            this._protocols = undefined;
            this._sourcePorts.internalValue = undefined;
            this._sources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationPorts.internalValue = value.destinationPorts;
            this._destinations.internalValue = value.destinations;
            this._protocols = value.protocols;
            this._sourcePorts.internalValue = value.sourcePorts;
            this._sources.internalValue = value.sources;
        }
    }

    // destination_ports - computed: true, optional: true, required: false
    private _destinationPorts = new PortRangePropertyList(this, "destination_ports", false);
    public get destinationPorts() {
        return this._destinationPorts;
    }
    public putDestinationPorts(value: PortRangeProperty[] | cdktn.IResolvable) {
        this._destinationPorts.internalValue = value;
    }
    public resetDestinationPorts() {
        this._destinationPorts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortsInput() {
        return this._destinationPorts.internalValue;
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new AddressPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: AddressProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: number[]; 
    public get protocols() {
        return this.getNumberListAttribute('protocols');
    }
    public set protocols(value: number[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // source_ports - computed: true, optional: true, required: false
    private _sourcePorts = new SourcePortsPropertyList(this, "source_ports", false);
    public get sourcePorts() {
        return this._sourcePorts;
    }
    public putSourcePorts(value: SourcePortsProperty[] | cdktn.IResolvable) {
        this._sourcePorts.internalValue = value;
    }
    public resetSourcePorts() {
        this._sourcePorts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortsInput() {
        return this._sourcePorts.internalValue;
    }

    // sources - computed: true, optional: true, required: false
    private _sources = new SourcesPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: SourcesProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    public resetSources() {
        this._sources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
    }
}

export class ServerCertificateScopePropertyList extends cdktn.ComplexList {
    public internalValue? : ServerCertificateScopeProperty[] | cdktn.IResolvable

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
    public get(index: number): ServerCertificateScopePropertyOutputReference {
        return new ServerCertificateScopePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServerCertificateProperty {
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#resource_arn CcTLSInspectionConfiguration#resource_arn}
    */
    readonly resourceArn?: string;
}
export class ServerCertificatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServerCertificateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerCertificateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceArn = value.resourceArn;
        }
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }
}

export class ServerCertificatePropertyList extends cdktn.ComplexList {
    public internalValue? : ServerCertificateProperty[] | cdktn.IResolvable

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
    public get(index: number): ServerCertificatePropertyOutputReference {
        return new ServerCertificatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServerCertificateConfigurationProperty {
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#certificate_authority_arn CcTLSInspectionConfiguration#certificate_authority_arn}
    */
    readonly certificateAuthorityArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#check_certificate_revocation_status CcTLSInspectionConfiguration#check_certificate_revocation_status}
    */
    readonly checkCertificateRevocationStatus?: CheckCertificateRevocationStatusProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#scopes CcTLSInspectionConfiguration#scopes}
    */
    readonly scopes?: ServerCertificateScopeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#server_certificates CcTLSInspectionConfiguration#server_certificates}
    */
    readonly serverCertificates?: ServerCertificateProperty[] | cdktn.IResolvable;
}
export class ServerCertificateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServerCertificateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateAuthorityArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
        }
        if (this._checkCertificateRevocationStatus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkCertificateRevocationStatus = this._checkCertificateRevocationStatus?.internalValue;
        }
        if (this._scopes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes?.internalValue;
        }
        if (this._serverCertificates?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverCertificates = this._serverCertificates?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerCertificateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateAuthorityArn = undefined;
            this._checkCertificateRevocationStatus.internalValue = undefined;
            this._scopes.internalValue = undefined;
            this._serverCertificates.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateAuthorityArn = value.certificateAuthorityArn;
            this._checkCertificateRevocationStatus.internalValue = value.checkCertificateRevocationStatus;
            this._scopes.internalValue = value.scopes;
            this._serverCertificates.internalValue = value.serverCertificates;
        }
    }

    // certificate_authority_arn - computed: true, optional: true, required: false
    private _certificateAuthorityArn?: string; 
    public get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    public set certificateAuthorityArn(value: string) {
        this._certificateAuthorityArn = value;
    }
    public resetCertificateAuthorityArn() {
        this._certificateAuthorityArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }

    // check_certificate_revocation_status - computed: true, optional: true, required: false
    private _checkCertificateRevocationStatus = new CheckCertificateRevocationStatusPropertyOutputReference(this, "check_certificate_revocation_status");
    public get checkCertificateRevocationStatus() {
        return this._checkCertificateRevocationStatus;
    }
    public putCheckCertificateRevocationStatus(value: CheckCertificateRevocationStatusProperty) {
        this._checkCertificateRevocationStatus.internalValue = value;
    }
    public resetCheckCertificateRevocationStatus() {
        this._checkCertificateRevocationStatus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get checkCertificateRevocationStatusInput() {
        return this._checkCertificateRevocationStatus.internalValue;
    }

    // scopes - computed: true, optional: true, required: false
    private _scopes = new ServerCertificateScopePropertyList(this, "scopes", false);
    public get scopes() {
        return this._scopes;
    }
    public putScopes(value: ServerCertificateScopeProperty[] | cdktn.IResolvable) {
        this._scopes.internalValue = value;
    }
    public resetScopes() {
        this._scopes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes.internalValue;
    }

    // server_certificates - computed: true, optional: true, required: false
    private _serverCertificates = new ServerCertificatePropertyList(this, "server_certificates", true);
    public get serverCertificates() {
        return this._serverCertificates;
    }
    public putServerCertificates(value: ServerCertificateProperty[] | cdktn.IResolvable) {
        this._serverCertificates.internalValue = value;
    }
    public resetServerCertificates() {
        this._serverCertificates.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificatesInput() {
        return this._serverCertificates.internalValue;
    }
}

export class ServerCertificateConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ServerCertificateConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ServerCertificateConfigurationPropertyOutputReference {
        return new ServerCertificateConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TLSInspectionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_tls_inspection_configuration#server_certificate_configurations CcTLSInspectionConfiguration#server_certificate_configurations}
    */
    readonly serverCertificateConfigurations?: ServerCertificateConfigurationProperty[] | cdktn.IResolvable;
}
export class TLSInspectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TLSInspectionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serverCertificateConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverCertificateConfigurations = this._serverCertificateConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TLSInspectionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverCertificateConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverCertificateConfigurations.internalValue = value.serverCertificateConfigurations;
        }
    }

    // server_certificate_configurations - computed: true, optional: true, required: false
    private _serverCertificateConfigurations = new ServerCertificateConfigurationPropertyList(this, "server_certificate_configurations", false);
    public get serverCertificateConfigurations() {
        return this._serverCertificateConfigurations;
    }
    public putServerCertificateConfigurations(value: ServerCertificateConfigurationProperty[] | cdktn.IResolvable) {
        this._serverCertificateConfigurations.internalValue = value;
    }
    public resetServerCertificateConfigurations() {
        this._serverCertificateConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificateConfigurationsInput() {
        return this._serverCertificateConfigurations.internalValue;
    }
}
}
