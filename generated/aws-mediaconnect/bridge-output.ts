// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBridgeOutputProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Number (ARN) of the bridge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#bridge_arn CcBridgeOutput#bridge_arn}
    */
    readonly bridgeArn: string;
    /**
    * The network output name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#name CcBridgeOutput#name}
    */
    readonly name: string;
    /**
    * The output of the bridge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#network_output CcBridgeOutput#network_output}
    */
    readonly networkOutput: CcBridgeOutput.BridgeNetworkOutputProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output awscc_mediaconnect_bridge_output}
*/
export class CcBridgeOutput extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_bridge_output";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBridgeOutput resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBridgeOutput to import
    * @param importFromId The id of the existing CcBridgeOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBridgeOutput to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_bridge_output", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output awscc_mediaconnect_bridge_output} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBridgeOutputProps
    */
    public constructor(scope: Construct, id: string, config: CcBridgeOutputProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_bridge_output',
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
        this._bridgeArn = config.bridgeArn;
        this._name = config.name;
        this._networkOutput.internalValue = config.networkOutput;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bridge_arn - computed: false, optional: false, required: true
    private _bridgeArn?: string; 
    public get bridgeArn() {
        return this.getStringAttribute('bridge_arn');
    }
    public set bridgeArn(value: string) {
        this._bridgeArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bridgeArnInput() {
        return this._bridgeArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // network_output - computed: false, optional: false, required: true
    private _networkOutput = new CcBridgeOutput.BridgeNetworkOutputPropertyOutputReference(this, "network_output");
    public get networkOutput() {
        return this._networkOutput;
    }
    public putNetworkOutput(value: CcBridgeOutput.BridgeNetworkOutputProperty) {
        this._networkOutput.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkOutputInput() {
        return this._networkOutput.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bridge_arn: cdktn.stringToTerraform(this._bridgeArn),
            name: cdktn.stringToTerraform(this._name),
            network_output: ccBridgeOutputBridgeNetworkOutputPropertyToTerraform(this._networkOutput.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bridge_arn: {
                value: cdktn.stringToHclTerraform(this._bridgeArn),
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
            network_output: {
                value: ccBridgeOutputBridgeNetworkOutputPropertyToHclTerraform(this._networkOutput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBridgeOutput.BridgeNetworkOutputProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBridgeOutputBridgeNetworkOutputPropertyToTerraform(struct?: CcBridgeOutput.BridgeNetworkOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_address: cdktn.stringToTerraform(struct!.ipAddress),
        network_name: cdktn.stringToTerraform(struct!.networkName),
        port: cdktn.numberToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        ttl: cdktn.numberToTerraform(struct!.ttl),
    }
}


export function ccBridgeOutputBridgeNetworkOutputPropertyToHclTerraform(struct?: CcBridgeOutput.BridgeNetworkOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_address: {
            value: cdktn.stringToHclTerraform(struct!.ipAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_name: {
            value: cdktn.stringToHclTerraform(struct!.networkName),
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
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl: {
            value: cdktn.numberToHclTerraform(struct!.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcBridgeOutput {
export interface BridgeNetworkOutputProperty {
    /**
    * The network output IP Address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#ip_address CcBridgeOutput#ip_address}
    */
    readonly ipAddress: string;
    /**
    * The network output's gateway network name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#network_name CcBridgeOutput#network_name}
    */
    readonly networkName: string;
    /**
    * The network output port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#port CcBridgeOutput#port}
    */
    readonly port: number;
    /**
    * The network output protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#protocol CcBridgeOutput#protocol}
    */
    readonly protocol: string;
    /**
    * The network output TTL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_output#ttl CcBridgeOutput#ttl}
    */
    readonly ttl: number;
}
export class BridgeNetworkOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BridgeNetworkOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddress = this._ipAddress;
        }
        if (this._networkName !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkName = this._networkName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BridgeNetworkOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddress = undefined;
            this._networkName = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._ttl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddress = value.ipAddress;
            this._networkName = value.networkName;
            this._port = value.port;
            this._protocol = value.protocol;
            this._ttl = value.ttl;
        }
    }

    // ip_address - computed: false, optional: false, required: true
    private _ipAddress?: string; 
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
        this._ipAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
        return this._ipAddress;
    }

    // network_name - computed: false, optional: false, required: true
    private _networkName?: string; 
    public get networkName() {
        return this.getStringAttribute('network_name');
    }
    public set networkName(value: string) {
        this._networkName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkNameInput() {
        return this._networkName;
    }

    // port - computed: false, optional: false, required: true
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // ttl - computed: false, optional: false, required: true
    private _ttl?: number; 
    public get ttl() {
        return this.getNumberAttribute('ttl');
    }
    public set ttl(value: number) {
        this._ttl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
        return this._ttl;
    }
}
}
